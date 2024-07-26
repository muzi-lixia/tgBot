import styles from './index.module.scss'
import { Drawer } from 'antd'

export default function Rules({
    rankingLoading,
    rankingList,
    openDrawer,
    setOpenDrawer
} : {
    rankingLoading: boolean
    rankingList: Array<{
        botUserName: string // bot用户名
        tpusd: string // 余额
    }>
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
                <div className={styles.title}>Ranking</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close.png" width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                {/* <div className={styles.endTime}>Ending in: xx:xx:xx</div> */}
                {
                    rankingLoading ?
                        <div className={styles.loading}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                                    <div className={styles.rankingRow} key={item}>
                                        <div className={styles.no}>
                                            <div className={styles.img}></div>
                                            <div className={styles.name}></div>
                                        </div>
                                        <div className={styles.tpusd}></div>
                                    </div>
                                ))
                            }
                        </div> :
                        <div className={styles.rankingList}>
                            {
                                rankingList.length ?
                                    rankingList.map((item, index) => (
                                        <div className={styles.rankingRow} key={index}>
                                            <div className={styles.no}>
                                                {
                                                    index < 3 ?
                                                        <img src={`https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/no${index + 1}.png`} alt="" width={33} height={35} />
                                                        : <span className={styles.num}>{index + 1}</span>
                                                }
                                                <span className={styles.name}>{ item.botUserName || '--' }</span>
                                            </div>
                                            <div className={styles.tpusd}>
                                                <div className={styles.balance}>{ item.tpusd }</div>
                                                <div className={styles.unit}>$TPUSD</div>
                                            </div>
                                        </div>
                                    )) :
                                    <div className={styles.empty}>
                                        <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/empty.png" width={95} height={93} alt="" />
                                        <div>No Data</div>
                                    </div>
                            }
                        </div>
                }
            </div>
        </Drawer>
    )
}
