import styles from './index.module.scss'
import { BOT_URL, SHARE_TEXT } from '@/const/constants'
import { Modal } from 'antd'
import WebApp from '@twa-dev/sdk'

export default function ClaimModal({
    claimTpusd,
    openModal,
    setOpenModal
} : {
    claimTpusd: string
    openModal: boolean,
    setOpenModal: () => void
}) {

    // 分享
    const handleClickShare = () => {
        try {
            WebApp.openTelegramLink(
                `https://t.me/share/url?text=${SHARE_TEXT}&url=${BOT_URL}`
            )
        } catch (error) {}
    }

    return (
        <Modal
            title={null}
            open={openModal}
            width={348}
            footer={null}
            closable={false}
            centered
            className={styles.modal}
            classNames={{mask: styles.mask}}
        >
            <div className={styles.context}>
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/gold.png" width={350} height={350} alt="" />
                {
                    claimTpusd ?
                        <div className={styles.text}>
                            <div>Congratulations!</div>
                            <div>You have earned { claimTpusd } $TPUSD!</div>
                        </div> :
                        <div className={styles.loading}>
                            <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/loading.png" width={30} height={30} alt="" />
                            <div className={styles.loadingText}>loading...</div>
                        </div>
                }
            </div>
            {
                claimTpusd ?
                <>
                    <div className={styles.shareBtn} onClick={handleClickShare}>
                        <span>Share it!</span>
                    </div>
                    <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                        <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close-o.png" width={30} height={30} alt="" />
                    </div>
                </> : null
            }
        </Modal>
    )
}
