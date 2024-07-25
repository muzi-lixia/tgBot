import styles from './index.module.scss'
import { Drawer } from 'antd'

export default function Reward({
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
            height={'70%'}
            rootClassName={styles.drawer}
        >
            <div className={styles.customHeader}>
                <div className={styles.title}>Reward Record</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src={'/images/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                        <div className={styles.prizeRow} key={index}>
                            <div className={styles.left}>
                                <img src="/images/tpusd.png" width={34} height={34} alt="" />
                                <span className={styles.num}>{item} TPUSD</span>
                            </div>
                            <div className={styles.date}>2024/03/09 12:34:40</div>
                        </div>
                    ))
                }
            </div>
        </Drawer>
    )
}
