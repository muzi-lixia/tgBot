import React, { useState } from 'react'
import styles from './index.module.scss'
import Rules from './components/rules'
import Ranking from './components/ranking'
import Invitation from './components/invitation'
import Reward from './components/reward'
import ClaimModal from './components/claimModal'
import DrawsModal from './components/drawsModal'
import SoonModal from './components/soonModal'

type CustomStyle = {
    '--time'?: string
} & React.CSSProperties

export default function Home() {

    const [openRules, setOpenRules] = useState(false)
    const [openReward, setOpenReward] = useState(false)
    const [openRank, setOpenRank] = useState(false)
    const [openInvitation, setOpenInvitation] = useState(false)
    const [openClaimModal, setOpenClaimModal] = useState(false)
    const [openDrawsModal, setOpenDrawsModal] = useState(false)
    const [openSoonModal, setOpenSoonModal] = useState(false)

    // 邀请人数
    const [invitationNum, setInvitationNum] = useState(0)

    // 金币动画
    const [animation, setAnimation] = useState(false)
    // 金币动画持续时间
    const [animationDuration, setAnimationDuration] = useState(3)
    const customStyle: CustomStyle = {
        '--time': animationDuration+'s'
    }

    // click claim btn
    const handleClickClaim = () => {
        setAnimation(true)
        setAnimationDuration(3)
        setTimeout(() => {
            setOpenClaimModal(true)
        }, animationDuration * 1000)
    }

    // close claim modal
    const handleCloseClaimModal = () => {
        setOpenClaimModal(false)
        setAnimation(false)
    }

    // open invitation modal
    const handleClickInvitationModal = () => {
        setInvitationNum(1)
        setOpenInvitation(true)
    }

    // close invitation modal
    const handleCloseInvitationModal = () => {
        setInvitationNum(0)
        setOpenInvitation(false)
    }

    return (
        <div className={styles.home}>
            {/* 所有光源 */}
            <div className={styles.allLamplight}></div>
            <div className={styles.header}>
                <div className={styles.wallet}>
                    <div className={styles.balance}>
                        <span>2345.16</span>
                    </div>
                    <div className={styles.walletBtn} onClick={() => setOpenSoonModal(true)}>Wallet</div>
                </div>
                <div className={styles.claimNum}>
                    <span>1</span>
                </div>
            </div>

            {/* 左侧按钮 */}
            <div className={styles.btnGroup}>
                <div className={styles.rules} onClick={() => setOpenRules(true)}>
                    <img src="images/rules.png" width={44} height={44} alt="" />
                    <span>Rules</span>
                </div>
                <div className={styles.record} onClick={() => setOpenReward(true)}>
                    <img src="images/record.png" width={32} height={34} alt="" />
                    <span>Reward</span>
                </div>
                <div className={styles.rank} onClick={() => setOpenRank(true)}>
                    <img src="images/rank.png" width={44} height={33} alt="" />
                    <span>Rank</span>
                </div>
                <div className={styles.invitation} onClick={handleClickInvitationModal}>
                    <img src="images/invitation.png" width={32} height={30} alt="" />
                    <span>Invitation</span>
                </div>
            </div>

            {/* 右侧金币动画 */}
            <div
                className={`${styles.goldCoin} ${animation ? styles.animation : styles.homing}`}
                style={customStyle}
            >
                <img src="images/goldcoin.png" width={102} height={102} alt="" />
            </div>

            {/* 底部按钮 */}
            <div className={styles.claimBtn} onClick={handleClickClaim}></div>

            {/* 弹框 */}
            <Rules openDrawer={openRules} setOpenDrawer={() => setOpenRules(false)} />
            <Reward openDrawer={openReward} setOpenDrawer={() => setOpenReward(false)} />
            <Ranking openDrawer={openRank} setOpenDrawer={() => setOpenRank(false)} />
            <Invitation invitationNum={invitationNum} openDrawer={openInvitation} setOpenDrawer={handleCloseInvitationModal} />

            <ClaimModal openModal={openClaimModal} setOpenModal={handleCloseClaimModal} />

            <DrawsModal openModal={openDrawsModal} setOpenModal={() => setOpenDrawsModal(false)} />

            <SoonModal openModal={openSoonModal} setOpenModal={() => setOpenSoonModal(false)} />
        </div>
    )
}
