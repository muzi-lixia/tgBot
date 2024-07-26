import styles from './index.module.scss'
import { Modal } from 'antd'

export default function SoonModal({
    openModal,
    setOpenModal
} : {
    openModal: boolean,
    setOpenModal: () => void
}) {

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
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/comingsoon.png" width={70} height={70} alt="" />
            </div>
            <div className={styles.shadow}></div>
            <div className={styles.context}>
                <div className={styles.title}>Coming soon</div>
                <div className={styles.btn} onClick={() => setOpenModal()}>
                    <span>Go it!</span>
                </div>
            </div>

            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
