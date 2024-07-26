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
                <div className={styles.title}>Rules</div>
                <div onClick={() => setOpenDrawer()}>
                    <img src={'https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/close.png'} width={30} height={30} alt="" />
                </div>
            </div>
            <div className={styles.context}>
                <div className={styles.first}>
                    <div className={styles.rule}>
                        <span className={styles.labelName}>Eligibility: </span>
                        All Telegram (TG) users are welcome to participate in this game.
                    </div>
                    <div className={styles.rule}>
                        <span className={styles.labelName}>Earning Rewards: </span>
                        Players can check in every 6 hours to claim a reward in the form of $TPUSD
                        <span className={styles.start}>*</span>.
                    </div>
                    <div className={styles.rule}>
                        <span className={styles.labelName}>Random Rewards: </span>
                        Each claim will randomly award $TPUSD ranging from 0.01 to 1.
                    </div>
                    <div className={styles.rule}>
                        <span className={styles.labelName}>Invitation Bonus<span className={styles.start}>**</span>: </span>
                        Players who invite a new user to join the game will be granted an additional claim without the 6-hour waiting period, once the new user has started playing.
                    </div>
                </div>
                <div className={styles.section}>
                    <div>
                        <span className={styles.start}>*</span>
                        <span className={styles.labelName}>TPUSD: </span>
                        <span>The first stablecoin on BTC, pegged 1:1 with USD.</span>
                    </div>
                    <div>
                        <span className={styles.start}>**</span>
                        <span className={styles.labelName}>Limitation: </span>
                        <span>One account can earn up to 10 invitation bonus in total.</span>
                    </div>
                </div>
                <div className={styles.rewardsCollection}>
                    <div className={styles.title}>Rewards Collection:</div>
                    <ul>
                        <li>From August 5th, players who have accumulated over 100 $TPUSD Rewards will be eligible for an airdrop of the 100 $TPUSD to the connected wallet, and players can swap the 100 $TPUSD for 100 $USDT immediately on <span>TerpLayer.com</span> - The Cross-Chain service will be available on TerpLayer from August 5th.</li>
                        <li>All rewards can be redeemed as price deduction in the <span>Terpolly Inscription events</span> on August 12th, 2024.</li>
                        <li>After August 12th, players can add $TPUSD to their existing rewards amount, and once the total TPUSD reaches 100, the existing $TPUSD rewards will be airdropped to the players to swap for $USDT immediately on the <span>TerpLayer.com</span></li>
                    </ul>
                    <div className={styles.forExample}>
                        For example, if I have 20 $TPUSD reward remaining on the game account after August 12th, then I can buy 80 $TPUSD in the connect wallet, and I will be airdropped with the 20 $TPUSD to my wallet as the rewards collection. The total 100 $TPUSD can be swapped to $USDT immediately with the cross-chain service at <span>TerpLayer.com</span>
                    </div>
                </div>
                <div className={styles.gameDuration}>
                    <div className={styles.title}>Game Duration: July 29th - August 18th</div>
                    <ul>
                        <li>
                            <div className={styles.phase}>Phase 1: </div>
                            <div className={styles.desc}>
                                <div>July 29th - August 4th</div>
                                <div>- Public Participation</div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.phase}>Phase 2: </div>
                            <div className={styles.desc}>
                                <div>August 5th - August 11th</div>
                                <div>- Wallet Connection + Bonus Activation + Conditioned Reward Collection</div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.phase}>Phase 3: </div>
                            <div className={styles.desc}>
                                <div>August 12th - August 18th</div>
                                <div>- Rewards Collection in Terpolly Inscription & $TPUSD top-up</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Drawer>
    )
}
