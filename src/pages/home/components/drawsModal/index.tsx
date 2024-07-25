import styles from './index.module.scss'
import { Modal } from 'antd'

export default function DrawsModal({
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
                <img src="images/draws.png" width={96} height={99} alt="" />
            </div>
            <div className={styles.shadow}></div>
            <div className={styles.context}>
                <div className={styles.title}>Out of Draws!</div>
                <div className={styles.desc}>The next draw is available in xx:xx:xx.</div>
                <div className={styles.desc}>Invite your friends to earn bonus draws!</div>
                <div className={styles.btn}>
                    <span>Invite Friends</span>
                </div>
            </div>

            <div className={styles.closeBtn} onClick={() => setOpenModal()}>
                <img src="images/close-o.png" width={30} height={30} alt="" />
            </div>
        </Modal>
    )
}
