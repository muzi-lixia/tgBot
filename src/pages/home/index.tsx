import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

export default function Home() {

    const navigation = useNavigate()

    // click claim btn
    const handleClickClaim = async () => {
        navigation('betting')
    }

    useEffect(() => {
        if (WebApp) {
            // 显示取消按钮
            WebApp.BackButton.hide()
        }
    }, [])

    return (
        <div className={styles.home}>
            {/* 底部按钮 */}
            <div className={`${styles.claimBtn}`} onClick={handleClickClaim}>
                <img className={styles.claimBg1} src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim-1.png" width={175} height={65} alt="" />
            </div>
        </div>
    )
}
