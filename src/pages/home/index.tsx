import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Rules from './components/rules'
import Ranking from './components/ranking'
import Invitation from './components/invitation'
import Reward from './components/reward'
import ClaimModal from './components/claimModal'
import DrawsModal from './components/drawsModal'

export default function Home() {
    WebApp.MainButton.setParams({
        text: 'Main Button'
    });
    WebApp.MainButton.onClick(function () {
        WebApp.showAlert('Main Button was clicked')
    });
    WebApp.MainButton.show();

    const [openRules, setOpenRules] = useState(false)
    const [openReward, setOpenReward] = useState(false)
    const [openRank, setOpenRank] = useState(false)
    const [openInvitation, setOpenInvitation] = useState(false)
    const [openClaimModal, setOpenClaimModal] = useState(false)
    const [openDrawsModal, setOpenDrawsModal] = useState(false)

    const [animation, setAnimation] = useState(false)

    const handleClickClaim = () => {
        setAnimation(true)
        setTimeout(() => {
            setOpenClaimModal(true)
        }, 2000)
    }

    const handleCloseClaimModal = () => {
        setOpenClaimModal(false)
        setAnimation(false)
    }

    useEffect(() => {
        const info = WebApp.initDataUnsafe
        console.log(WebApp.initData);
        console.log(WebApp.initDataUnsafe);
        console.log(info);
    }, [])

    return (
        <div className={styles.home}>
            {/* 所有光源 */}
            <div className={styles.allLamplight}></div>
            <div className={styles.header}>
                <div className={styles.wallet}>
                    <div>
                        <img src="/images/balanceImg.png" width={120} height={44} alt="" />
                    </div>
                    <div className={styles.walletBtn}>Wallet</div>
                </div>
                <div className={styles.claimNum}>
                    <img src="/images/claim.png" width={120} height={43} alt="" />
                </div>
            </div>

            {/* 左侧按钮 */}
            <div className={styles.btnGroup}>
                <div className={styles.rules} onClick={() => setOpenRules(true)}>
                    <img src="/images/rules.png" width={44} height={44} alt="" />
                    <span>Rules</span>
                </div>
                <div className={styles.record} onClick={() => setOpenReward(true)}>
                    <img src="/images/record.png" width={32} height={34} alt="" />
                    <span>Reward</span>
                </div>
                <div className={styles.rank} onClick={() => setOpenRank(true)}>
                    <img src="/images/rank.png" width={44} height={33} alt="" />
                    <span>Rank</span>
                </div>
                <div className={styles.invitation} onClick={() => setOpenInvitation(true)}>
                    <img src="/images/invitation.png" width={32} height={30} alt="" />
                    <span>Invitation</span>
                </div>
            </div>

            {/* 右侧金币动画 */}
            <div className={`${styles.goldCoin} ${animation ? styles.animation : styles.homing}`}>
                <img src="/images/goldcoin.png" width={102} height={102} alt="" />
            </div>

            {/* 底部按钮 */}
            <div className={styles.claimBtn} onClick={handleClickClaim}>
                {/* <img src="/images/claim-1.png" width={175} height={65} alt="" /> */}
            </div>

            {/* 弹框 */}
            <Rules openDrawer={openRules} setOpenDrawer={() => setOpenRules(false)} />
            <Reward openDrawer={openReward} setOpenDrawer={() => setOpenReward(false)} />
            <Ranking openDrawer={openRank} setOpenDrawer={() => setOpenRank(false)} />
            <Invitation openDrawer={openInvitation} setOpenDrawer={() => setOpenInvitation(false)} />

            <ClaimModal openModal={openClaimModal} setOpenModal={handleCloseClaimModal} />

            <DrawsModal openModal={openDrawsModal} setOpenModal={() => setOpenDrawsModal(false)} />
        </div>
    )
}
