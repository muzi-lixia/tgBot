import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Rules from './components/rules'
import Ranking from './components/ranking'
import Invitation from './components/invitation'
import Reward from './components/reward'
import ClaimModal from './components/claimModal'
import DrawsModal from './components/drawsModal'
import SoonModal from './components/soonModal'
import * as API_METHOD from '@/context/index'
// import useCountdown from '@/hooks'

export default function Home({
    jwt
} : {
    jwt: string
}) {

    const [openRules, setOpenRules] = useState(false)
    const [openReward, setOpenReward] = useState(false)
    const [openRank, setOpenRank] = useState(false)
    const [openInvitation, setOpenInvitation] = useState(false)
    const [openClaimModal, setOpenClaimModal] = useState(false)
    const [openDrawsModal, setOpenDrawsModal] = useState(false)
    const [openSoonModal, setOpenSoonModal] = useState(false)

    // 用户数据
    const [userDetail, setUserDetail] = useState<{
        botId: number
        botUserName: string
        id: number
        inviteCode: string
        inviteCount: number
        lastSyncTime: number
        tpusd: string
        syncInviteCount: number
        nextSyncTime: number
    }>()

    // 金币动画
    const [animation, setAnimation] = useState(false)

    // 奖励的tpusd数量
    const [claimTpusd, setClaimTpusd] = useState('')
    // click claim btn
    const handleClickClaim = async () => {
        // const time1 = 1000 * 60 * 60 * 6
        // const lastSyncTime = (userDetail?.lastSyncTime && userDetail?.lastSyncTime * 1000) || 0
        // const currentTime = new Date().getTime()

        if (userDetail?.lastSyncTime && userDetail?.lastSyncTime * 1000 )
        if (animation) {
            // 防止重复点击
            return
        }
        setAnimation(true)
        const time = new Date().getTime()
        try {
            const result = await API_METHOD.postUserLuckAward()
            setClaimTpusd(result.data.ClaimTpusd)
            getUserDetail()
            if ((new Date().getTime() - time) < 3) {
                setTimeout(() => {
                    setOpenClaimModal(true)
                }, 3000)
            } else {
                setOpenClaimModal(true)
            }
        } catch (error) {
            setOpenClaimModal(false)
            setAnimation(false)
        }
    }

    // close claim modal
    const handleCloseClaimModal = () => {
        setOpenClaimModal(false)
        setAnimation(false)
    }

    // open invitation modal
    const handleClickInvitationModal = () => {
        setOpenInvitation(true)
    }

    // close invitation modal
    const handleCloseInvitationModal = () => {
        setOpenInvitation(false)
    }

    const [rankingList, setRankingList] = useState<Array<any>>([])
    const [rankingLoading, setRankingLoading] = useState(false)
    // open ranking modal
    const handleClickOpenRankingModal = async () => {
        try {
            setRankingLoading(true)
            setOpenRank(true)
            const ranking = await API_METHOD.getRankList()
            setRankingList(ranking.data.userRankList)
            setRankingLoading(false)
        } catch (error) {
            setRankingList([])
            setRankingLoading(false)
        }
    }

    const [rewardList, setRewardList] = useState<Array<any>>([])
    const [rewardLoading, setRewardLoading] = useState(false)
    //open reward modal
    const handleClickRewardModal = async () => {
        try {
            setRewardLoading(true)
            setOpenReward(true)
            const reward = await API_METHOD.getUserAssetList()
            setRewardLoading(false)
            setRewardList(reward.data.userAssetList)
        } catch (error) {
            setRewardList([])
            setRewardLoading(false)
        }
    }

    console.log(userDetail?.nextSyncTime)
    // const deadline = useCountdown({deadline: userDetail?.nextSyncTime || new Date().getTime()})
    // console.log(deadline)
    // 获取用户详情
    const getUserDetail = async () => {
        try {
            const detail = await API_METHOD.getUserDetail()
            setUserDetail(detail.data)
        } catch (error) {}
    }
    useEffect(() => {
        if (jwt) {
            getUserDetail()
        }
    }, [jwt])

    return (
        <div className={styles.home}>
            {/* 所有光源 */}
            <div className={styles.allLamplight}></div>
            <div className={styles.header}>
                <div className={styles.wallet}>
                    <div className={styles.balance}>
                        <span>{ userDetail?.tpusd || '0.00' }</span>
                    </div>
                    <div className={styles.walletBtn} onClick={() => setOpenSoonModal(true)}>Wallet</div>
                </div>
                <div className={styles.placeholder}>
                    <div className={styles.claimNum}>
                        <span>{ userDetail?.syncInviteCount }</span>
                    </div>
                </div>
            </div>

            {/* 左侧按钮 */}
            <div className={styles.btnGroup}>
                <div className={styles.rules} onClick={() => setOpenRules(true)}>
                    <img src="images/rules.png" width={44} height={44} alt="" />
                    <span>Rules</span>
                </div>
                <div className={styles.record} onClick={handleClickRewardModal}>
                    <img src="images/record.png" width={32} height={34} alt="" />
                    <span>Reward</span>
                </div>
                <div className={styles.rank} onClick={handleClickOpenRankingModal}>
                    <img src="images/rank.png" width={44} height={33} alt="" />
                    <span>Rank</span>
                </div>
                <div className={styles.invitation} onClick={handleClickInvitationModal}>
                    <img src="images/invitation.png" width={32} height={30} alt="" />
                    <span>Invitation</span>
                </div>
            </div>

            {/* 右侧金币动画 */}
            <div className={`${styles.goldCoin} ${animation ? styles.animation : styles.homing}`}>
                <img src="images/goldcoin.png" width={102} height={102} alt="" />
            </div>

            {/* 底部按钮 */}
            <div className={styles.claimBtn} onClick={handleClickClaim}></div>

            {/* 弹框 */}
            <Rules openDrawer={openRules} setOpenDrawer={() => setOpenRules(false)} />
            <Reward rewardList={rewardList} rewardLoading={rewardLoading} openDrawer={openReward} setOpenDrawer={() => setOpenReward(false)} />
            <Ranking rankingList={rankingList} rankingLoading={rankingLoading} openDrawer={openRank} setOpenDrawer={() => setOpenRank(false)} />
            <Invitation inviteCode={userDetail?.inviteCode || ''} invitationNum={(userDetail?.inviteCount || 1) as number} openDrawer={openInvitation} setOpenDrawer={handleCloseInvitationModal} />

            {/* claim modal */}
            <ClaimModal claimTpusd={claimTpusd} openModal={openClaimModal} setOpenModal={handleCloseClaimModal} />
            {/* out of draws modal */}
            <DrawsModal inviteCode={userDetail?.inviteCode || ''} openModal={openDrawsModal} setOpenModal={() => setOpenDrawsModal(false)} />
            {/* wallet coming soon modal */}
            <SoonModal openModal={openSoonModal} setOpenModal={() => setOpenSoonModal(false)} />
        </div>
    )
}
