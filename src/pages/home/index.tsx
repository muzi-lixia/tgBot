import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'
import Rules from './components/rules'
import Ranking from './components/ranking'
import Invite from './components/invite'

export default function Home() {
    WebApp.MainButton.setParams({
        text: 'Main Button'
    });
    WebApp.MainButton.onClick(function () {
        WebApp.showAlert('Main Button was clicked')
    });
    WebApp.MainButton.show();

    function toggleMainButton() {
        if (WebApp.MainButton.isVisible) {
            WebApp.MainButton.hide();
        } else {
            WebApp.MainButton.show();
        }
    }

    const [openRules, setOpenRules] = useState(false)
    const [openRanking, setOpenRanking] = useState(false)
    const [openInvite, setOpenInvite] = useState(false)
    const [userInfo, setUserInfo] = useState<any>()
    
    useEffect(() => {
        const info = WebApp.initDataUnsafe
        console.log(WebApp.initData);
        console.log(WebApp.initDataUnsafe);
        console.log(info);
        if (info) {
            setUserInfo(info)
        }
    }, [])

    return (
        <div className={styles.home}>
            <Button onClick={() => setOpenRules(true)}>规则</Button>
            <Button onClick={() => setOpenRanking(true)}>排行</Button>
            <Button onClick={() => setOpenInvite(true)}>邀请</Button>
            <div>{userInfo && JSON.stringify(userInfo)}</div>
            测试
            <button onClick={toggleMainButton}>Toggle Main Button</button>


            <Rules openDrawer={openRules} setOpenDrawer={() => setOpenRules(false)} />
            <Ranking openDrawer={openRanking} setOpenDrawer={() => setOpenRanking(false)} />
            <Invite openDrawer={openInvite} setOpenDrawer={() => setOpenInvite(false)} />
        </div>
    )
}
