import styles from './index.module.scss'
import { BOT_URL, SHARE_TEXT } from '@/const/constants'
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
        try {
            const utils = initUtils();
            utils.shareURL(
                `${BOT_URL}`,
                SHARE_TEXT
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
                <div className={styles.text}>
                    <div>Congratulations!</div>
                    <div>You have earned { claimTpusd } $TPUSD!</div>
                </div>
            </div>
            <div className={styles.shareBtn} onClick={handleClickShare}>
                <span>Share it!</span>
            </div>
            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
