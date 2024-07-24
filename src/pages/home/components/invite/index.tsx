import styles from './index.module.scss'
import { Drawer } from 'antd'

export default function Rules({
    openDrawer,
    setOpenDrawer
} : {
    openDrawer: boolean,
    setOpenDrawer: () => void
}) {

    const step = [
        {
            text: '点击按钮邀请好友'
        },
        {
            text: '好友加入游戏'
        },
        {
            text: '获得额外抽奖机会'
        }
    ]

    return (
        <Drawer
            title=""
            placement={'bottom'}
            closable={false}
            onClose={() => setOpenDrawer()}
            open={openDrawer}
            key={'bottom'}
            height={'70%'}
            rootClassName={styles.drawer}
        >
            <div className={styles.customHeader}>
                <div className={styles.title}>邀请</div>
                <div onClick={() => setOpenDrawer()}>X</div>
            </div>
            <div className={styles.context}>
                <div className={styles.inviteNum}>您已邀请好友30人，获得点击次数<span>+30</span></div>
                <div className={styles.inviteStep}>
                    {
                        step.map((item, index) => (
                            <div key={index} className={styles.step}>
                                <div className={styles.stepText}>{ item.text }</div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.inviteBtn}>邀请好友</div>
            </div>
        </Drawer>
    )
}
