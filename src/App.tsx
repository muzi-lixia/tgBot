import './App.css'
import { useEffect, useState, lazy, useTransition } from 'react'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import LoadingPage from './components'
import * as API_METHOD from '@/context/index'

const HomePage = lazy(() => import('./pages/home'))

function App() {
    eruda.init()

    const [jwt, setJwt] = useState(sessionStorage.getItem('jwt') || '')
    const initData = WebApp.initData

    // 获取token
    const getJwtToken = async (data: string) => {
        try {
            sessionStorage.removeItem('jwt')
            localStorage.removeItem('jwtTokenTime')
            setJwt('')
            const result = await API_METHOD.getJwtToken(data)
            if (result.data.jwtToken) {
                setJwt(result.data.jwtToken)
                sessionStorage.setItem('jwt', result.data.jwtToken)
                localStorage.setItem('jwtTokenTime', JSON.stringify(new Date().getTime()))
                const paramsString = decodeURIComponent(initData)
                const params = new URLSearchParams(paramsString)
                const inviteCode = params.get("start_param")
                await API_METHOD.postBotRegister(inviteCode || '')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const time = localStorage.getItem('jwtTokenTime') ? JSON.parse(localStorage.getItem('jwtTokenTime') as string) : 0
        // let initData = `query_id=AAF4kt0tAwAAAHiS3S2pvoMT&user=%7B%22id%22%3A7211946616%2C%22first_name%22%3A%22muzi%22%2C%22last_name%22%3A%22lixia%22%2C%22username%22%3A%22muzi_lixia%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1722086690&hash=0a7a4570851849e5b96f8e5b39b6d988fee55985d479d1db305fe11c81acbc3a`
        if (initData) {
            if (!sessionStorage.getItem('jwt') || !time) {
                getJwtToken(initData)
            } else if (time + 1000 * 60 * 60 * 3 < new Date().getTime()) {
                getJwtToken(initData)
            }
        }
        startTransition(() => {
            setIsLoading(false)
        })
        try {
            if ((window as any).Telegram.WebApp.init()) {
                WebApp.expand()
            }
        } catch (error) {
            console.log(error)
        }
    }, [])
    const [isLoading, setIsLoading] = useState(true)
    const [isPending, startTransition] = useTransition()

    return (
        <>
            {
                isLoading || isPending ? <LoadingPage /> : <HomePage jwt={jwt} />
            }
        </>
    )
}

export default App
