import styles from './index.module.scss'
import { Drawer } from 'antd'

export default function Rules({
    openDrawer,
    setOpenDrawer
} : {
    openDrawer: boolean,
    setOpenDrawer: () => void
}) {

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
                    <img src={'images/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                <div className={styles.inviteNum}>You have invited xxx friends, and earned xx bonuses</div>
                <div className={styles.inviteStep}>
                    <div className={styles.step1}>
                        <span>Send the Invitaion</span>
                    </div>
                    <div className={styles.step2}>
                        <span>Friends Come and Play</span>
                    </div>
                    <div className={styles.step3}>
                        <span>Earn the Extra Bonus</span>
                    </div>
                </div>
                <div className={styles.inviteBtn}>
                    <span>Invite Friends</span>
                </div>
            </div>
        </Drawer>
    )
}
