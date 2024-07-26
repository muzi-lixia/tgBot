import styles from './index.module.scss'
import { Modal } from 'antd'


export default function ClaimModal({
    claimTpusd,
    openModal,
    setOpenModal
} : {
    claimTpusd: string
    openModal: boolean,
    setOpenModal: () => void
}) {

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
            <div className={styles.shareBtn}>
                <span>Share it!</span>
            </div>
            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="images/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
