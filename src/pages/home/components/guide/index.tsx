import { useState } from 'react'
import styles from './index.module.scss'

export default function Guide({
    num,
    setIsReadGuidePage
} : {
    num: number
    setIsReadGuidePage: () => void
}) {

    const [step, setStep] = useState<'1' | '2' | '3'>('1')
    // click skip
    const handleClickSkip = (step: '2' | '3') => {
        setStep(step)
    }

    // click let's game
    const handleClickStart = () => {
        setIsReadGuidePage()
        localStorage.setItem('isReadGuidePage', 'true')
    }

    const renderStep = () => {
        switch (step) {
            case '1':
                return (
                    <div className={styles.guideStep1}>
                        <div className={styles.skip}>
                            <div className={styles.skipBtn} onClick={() => handleClickSkip('2')}>
                                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/skip-bg.png" width={102} height={36} alt="" />
                                <span>Next</span>
                            </div>
                        </div>
                        <div className={styles.guideClaimBtn}>
                            <div className={styles.claimText}>
                                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/text-bg-1.png" width={306} height={79} alt="" />
                                <div className={styles.textStyle}>
                                    <p>Click to claim randomly 0.01 to 1</p>
                                    <p>$TPUSD：The 1 st Stablecoin on BTC, pegged 1:1 with USD.</p>
                                </div>
                            </div>
                            <img className={styles.guideClaimImg} src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim-1.png" width={175} height={65} alt="" />
                        </div>
                    </div>
                )
            case '2':
                return (
                    <div className={styles.guideStep2}>
                        <div className={styles.skip}>
                            <div className={styles.skipBtn} onClick={() => handleClickSkip('3')}>
                                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/skip-bg.png" width={102} height={36} alt="" />
                                <span>Next</span>
                            </div>
                        </div>
                        <div className={styles.claimNumBox}>
                            <div className={styles.claimNum}>
                                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/claim.png" width={120} height={44} alt="" />
                                <span>{ num }</span>
                            </div>
                        </div>
                        <div className={styles.guideText}>
                            <span>Check in every 4 hours toearn a reward draw, orinvite a new friend to olayi' to sarn a oonus draw</span>
                        </div>
                    </div>
                )
            case '3':
                return (
                    <div className={styles.guideStep3}>
                        <div className={styles.guideText}>
                            <span>Click here to get your invitationlink and eann extra bonus draws</span>
                        </div>
                        <div className={styles.btnGroup}>
                            <div className={styles.invitation}>
                                <img src="https://cdn-m5yrsruzzfea.vultrcdn.com/storage/terpollyBot/invitation.png" width={32} height={30} alt="" />
                                <span>Invitation</span>
                            </div>
                        </div>
                        <div className={styles.startBtn}>
                            <div className={styles.start} onClick={handleClickStart}>Let's game!</div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className={styles.guide}>
            {
                renderStep()
            }
        </div>
    )
}
