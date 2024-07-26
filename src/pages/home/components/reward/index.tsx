import styles from './index.module.scss'
import { Drawer } from 'antd'
import { getTime } from '@/utils/date'

export default function Reward({
    rewardLoading,
    rewardList,
    openDrawer,
    setOpenDrawer
} : {
    rewardLoading: boolean
    rewardList: Array<{
        tpusd: string
        create_time: number
    }>
    openDrawer: boolean
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
                <div className={styles.title}>Reward Record</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src={'images/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                {
                    rewardLoading ?
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                            <div className={styles.loading} key={index}>
                                <div className={styles.left}>
                                    <div className={styles.img}></div>
                                    <div className={styles.name}></div>
                                </div>
                                <div className={styles.date}></div>
                            </div>
                        )) :
                        rewardList.length > 0 ?
                            rewardList.map((item, index) => (
                                <div className={styles.prizeRow} key={index}>
                                    <div className={styles.left}>
                                        <img src="images/tpusd.png" width={34} height={34} alt="" />
                                        <span className={styles.num}>{ item.tpusd } TPUSD</span>
                                    </div>
                                    <div className={styles.date}>{ getTime(item.create_time, '/') }</div>
                                </div>
                            )) :
                            <div className={styles.empty}>
                                <img src="images/empty.png" width={95} height={93} alt="" />
                                <div>No Data</div>
                            </div>
                }
            </div>
        </Drawer>
    )
}
