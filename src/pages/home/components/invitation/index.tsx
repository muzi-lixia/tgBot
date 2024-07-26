import styles from './index.module.scss'
import { BOT_URL } from '@/const/constants'
import { Drawer } from 'antd'
// import { initUtils } from '@telegram-apps/sdk'
import WebApp from '@twa-dev/sdk'

export default function Rules({
    inviteCode,
    invitationNum,
    openDrawer,
    setOpenDrawer
} : {
    inviteCode: string
    invitationNum: number
    openDrawer: boolean,
    setOpenDrawer: () => void
}) {

    // 邀请好友
    const handleClickInvitationFriends = () => {
        try {
            // const utils = initUtils();
            WebApp.openTelegramLink(
                `https://t.me/share/url?url=${BOT_URL}?startapp=${inviteCode}`
            )
        } catch (error) {}
    }

    return (
        <Drawer
            title=""
            placement={'bottom'}
            closable={false}
            onClose={() => setOpenDrawer()}
            open={openDrawer}
            key={'bottom'}
            height={'80%'}
            rootClassName={styles.drawer}
        >
            <div className={styles.customHeader}>
                <div className={styles.title}>Invitation</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src={'https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                <div className={styles.inviteNum}>
                    You have invited { 10 - invitationNum } friends,
                    {
                        10 - invitationNum < 2 ? `and earned ${ 10 - invitationNum } bonus` :
                            10 - invitationNum < 10 ? `and earned ${ 10 - invitationNum } bonuses` :
                            `maximum ${ 10 - invitationNum } bonuses`
                    }
                </div>
                <div className={styles.inviteStep}>
                    <div className={styles.step1}>
                        <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/step1.png" alt="" />
                        <span>Send the Invitaion</span>
                    </div>
                    <div className={styles.step2}>
                        <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/step2.png" alt="" />
                        <span>Friends Come and Play</span>
                    </div>
                    <div className={styles.step3}>
                        <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/step3.png" alt="" />
                        <span>Earn the Extra Bonus</span>
                    </div>
                </div>
                <div className={styles.inviteBtn} onClick={handleClickInvitationFriends}>
                    <span>Invite Friends</span>
                </div>
            </div>
        </Drawer>
    )
}
