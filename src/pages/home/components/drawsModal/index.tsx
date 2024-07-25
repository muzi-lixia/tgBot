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
            width={282}
            footer={null}
            closable={false}
            className={styles.modal}
        >
            <div className={styles.headerImg}></div>
            <div className={styles.shadow}></div>
            <div className={styles.context}>
                <div className={styles.title}>次数不够了</div>
                <div className={styles.desc}>距离下次抽奖还有 05:40:30</div>
                <div className={styles.desc}>或邀请好友获得额外次数</div>
                <div className={styles.btn}>
                    {/* <Button>邀请好友</Button> */}
                </div>
            </div>

            <div className={styles.closeBtn} onClick={() => setOpenModal()}>X</div>
        </Modal>
    )
}
