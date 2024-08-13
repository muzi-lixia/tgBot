import './App.css'
import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import LoadingPage from './components/loadingPage'
import HomePage from './pages/home'
import * as API_METHOD from '@/apis'
import useFirstScreenLoader from '@/hooks/useFirstScreenLoader'

const imageUrls = [
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/bg.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/bg2.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/bg1.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/allLamplight.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/balanceImg.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/btn-1.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/goldcoin.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim-1.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/rules.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/record.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/rank.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/invitation.png",
    "https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim-2.png"
]

interface UserInfoDetail {
    botId: number
    botUserName: string
    id: number
    inviteCode: string
    inviteCount: number
    lastSyncTime: number
    tpusd: string
    syncInviteCount: number
    nextSyncTime: number
}

function App() {
    eruda.init()

    const [jwt, setJwt] = useState(sessionStorage.getItem('jwt') || '')
    const initData = WebApp.initData
    const [userDetail, setUserDetail] = useState<UserInfoDetail>({
        botId: 0,
        botUserName: '',
        id: 0,
        inviteCode: '',
        inviteCount: 0,
        lastSyncTime: 0,
        tpusd: '',
        syncInviteCount: 0,
        nextSyncTime: 0
    })

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
                console.log(initData);
                
                const paramsString = decodeURIComponent(initData)
                console.log(paramsString);
                
                const params = new URLSearchParams(paramsString)
                console.log(params);
                
                const inviteCode = params.get("start_param")
                await API_METHOD.postBotRegister(inviteCode || '')
                getUserDetail()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            if (WebApp.initDataUnsafe) {
                WebApp.expand()
            }
            console.log(initData); 
            const paramsString = decodeURIComponent(initData)
            console.log(paramsString);
            const params = new URLSearchParams(paramsString)
            console.log(params, ">>>>>");
            console.log(params.get("start_param"));
            
        } catch (error) {
            console.log(error)
        }
        const time = localStorage.getItem('jwtTokenTime') ? JSON.parse(localStorage.getItem('jwtTokenTime') as string) : 0
        // let initData = `query_id=AAF4kt0tAwAAAHiS3S2pvoMT&user=%7B%22id%22%3A7211946616%2C%22first_name%22%3A%22muzi%22%2C%22last_name%22%3A%22lixia%22%2C%22username%22%3A%22muzi_lixia%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1722086690&hash=0a7a4570851849e5b96f8e5b39b6d988fee55985d479d1db305fe11c81acbc3a`
        if (initData) {
            if (!sessionStorage.getItem('jwt') || !time) {
                getJwtToken(initData)
            } else if (time + 1000 * 60 * 60 * 3 < new Date().getTime()) {
                getJwtToken(initData)
            }
        }
        if (jwt) {
            getUserDetail()
        }
    }, [])
    // 获取用户详情
    const getUserDetail = async () => {
        API_METHOD.getUserDetail().then((res) => {
            setUserDetail(res.data || {})
        })
    }
    useEffect(() => {
        if (jwt) {
            // getUserDetail()
        }
    }, [jwt])

    const { showSplash, progress } = useFirstScreenLoader(imageUrls, 3000)
    console.log(import.meta.env.MODE);
    
    if (!showSplash && progress < 99) {
        return <LoadingPage progress={progress} />
    }

    return (
        <HomePage userDetail={userDetail} updateUserDetail={getUserDetail} />
    )
}

export default App
