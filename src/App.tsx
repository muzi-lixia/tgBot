import './App.css'
import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import Home from './pages/home'
import * as API_METHOD from '@/context/index'

function App() {
    eruda.init()

    const [jwt, setJwt] = useState(sessionStorage.getItem('jwt') || '')
    const initData = WebApp.initData

    // 获取token
    const getJwtToken = async (data: string) => {
        try {
            const result = await API_METHOD.getJwtToken(data)
            if (result.data.jwtToken) {
                setJwt(result.data.jwtToken)
                sessionStorage.setItem('jwt', result.data.jwtToken)
                const paramsString = decodeURIComponent(initData)
                const params = new URLSearchParams(paramsString)
                const inviteCode = params.get("start_param")
                console.log(inviteCode, 'inviteCode')
                await API_METHOD.postBotRegister(inviteCode || '')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(initData)
        getJwtToken(`query_id=AAF4kt0tAwAAAHiS3S1YU-69&user=%7B%22id%22%3A7211946616%2C%22first_name%22%3A%22muzi%22%2C%22last_name%22%3A%22lixia%22%2C%22username%22%3A%22muzi_lixia%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721973469&hash=e600c5d0dacfc741c243d666fa5f22aff0ba795f778eb3846b5ca568c46ff422`)
        if (initData && !sessionStorage.getItem('jwt')) {
            getJwtToken(initData)
        }
    }, [])

    return (
        <Home jwt={jwt} />
    )
}

export default App
