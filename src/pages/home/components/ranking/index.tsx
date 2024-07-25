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
            height={'70%'}
            rootClassName={styles.drawer}
        >
            <div className={styles.customHeader}>
                <div className={styles.title}>Ranking</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src="images/close.png" width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                <div className={styles.endTime}>Ending in: xx:xx:xx</div>
                <div className={styles.rankingList}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                            <div className={styles.rankingRow} key={index}>
                                <div className={styles.no}>
                                    {
                                        index < 3 ?
                                            <img src={`images/no${index + 1}.png`} alt="" width={33} height={35} />
                                            : <span className={styles.num}>{item}</span>
                                    }
                                    <span className={styles.name}>Ann Casey</span>
                                </div>
                                <div className={styles.tpusd}>
                                    <div className={styles.balance}>1973.98</div>
                                    <div className={styles.unit}>TPUSD</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Drawer>
    )
}
