import styles from './index.module.scss'
import { BOT_URL } from '@/const/constants'
import { Modal } from 'antd'
import { initUtils } from '@telegram-apps/sdk'

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
        const utils = initUtils();
        utils.openTelegramLink(
            `https://t.me/share/url?url=${BOT_URL}`
        )
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
                <img src="images/gold.png" width={350} height={350} alt="" />
                <div className={styles.text}>
                    <div>Congratulations!</div>
                    <div>You have earned { claimTpusd } $TPUSD!</div>
                </div>
            </div>
            <div className={styles.shareBtn} onClick={handleClickShare}>
                <span>Share it!</span>
            </div>
            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="images/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
