import styles from './index.module.scss'
import { BOT_URL } from '@/const/constants'
import { Modal } from 'antd'
import { initUtils } from '@telegram-apps/sdk'

export default function DrawsModal({
    countDate,
    inviteCode,
    openModal,
    setOpenModal
} : {
    countDate: {
        hour: string
        minute: string
        second: string
    }
    inviteCode: string
    openModal: boolean
    setOpenModal: () => void
}) {

    // 邀请好友
    const handleClickInvitationFriends = () => {
        try {
            const utils = initUtils();
            utils.openTelegramLink(
                `https://t.me/share/url?url=${BOT_URL}?startapp=${inviteCode}`
            )
        } catch (error) {}
    }

    return (
        <Modal
            title={null}
            open={openModal}
            width={300}
            footer={null}
            closable={false}
            centered
            classNames={{mask: styles.mask}}
            className={styles.modal}
        >
            <div className={styles.headerImg}>
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/draws.png" width={96} height={99} alt="" />
            </div>
            <div className={styles.shadow}></div>
            <div className={styles.context}>
                <div className={styles.title}>Out of Draws!</div>
                <div className={styles.desc}>The next draw is available in { `${countDate.hour}:${countDate.minute}:${countDate.second}` }.</div>
                <div className={styles.desc}>Invite your friends to earn bonus draws!</div>
                <div className={styles.btn} onClick={handleClickInvitationFriends}>
                    <span>Invite Friends</span>
                </div>
            </div>

            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
