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
                <div className={styles.title}>Game Rules</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src={'images/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                <div>Eligibility: All Telegram (TG) users are welcome to participate in this game.</div>
                <div>Earning Rewards: Players can tap the 'Claim' button every 6 hours to receive a reward in the form of USDT.</div>
                <div>Random Rewards Mechanism: Each claim will randomly award USDT ranging from $0.01 to $1.</div>
                <div>Invitation Bonus*: Players who invite a new user to join the game will be granted an additional claim without the 6-hour waiting period, once the new user has started playing.</div>
                <div>Phase 2 Update: One week after the game's launch, we will introduce a wallet connection feature. More bonus gameplay will be updated in Phase 2 as well.</div>
                <div>Token Airdrop: Players who have accumulated over $100 USDT will be eligible for an airdrop of tokens to their connected wallet, starting from Phase 2.</div>
                <div className={styles.tip}>*Limitation: One account can earn up to 10 invitation bonus in total.</div>
            </div>
        </Drawer>
    )
}
