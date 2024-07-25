import './App.css'
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import Home from './pages/home'
import axios from '@/apis/axios'
import API from '@/apis/constants'

function App() {
    eruda.init()

    // 获取token
    const getJwtToken = async (data: string) => {
        try {
            const result = await axios({
                method: 'POST',
                url: API.GET_JWT_TOKEN,
                data: {
                    authorization: 'tma ' + data
                }
            }) as any
            console.log(result)
            if (result.code === 0) {
                result.jwtToken && sessionStorage.setItem('jwt', result.jwtToken)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const info = WebApp.initDataUnsafe
        const initData = WebApp.initData
        console.log(initData)
        console.log(info)
        if (initData && !sessionStorage.getItem('jwtToken')) {
            getJwtToken(initData)
        }

        (async function() {
            try {
                const result = await axios({
                    method: 'GET',
                    url: API.GET_ACTIVE_LIST
                })
                console.log(result);
                
            } catch (error) {
                console.log(error);
                
            }
        })()
    }, [])

    return (
        <Home />
    )
}

export default App
