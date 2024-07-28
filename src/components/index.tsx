import styles from './index.module.scss'

export default function LoadingPage({
    progress
} : {
    progress: number
}) {

    return (
        <div className={styles.loading}>
            <div className={styles.topText}>
                <img src="images/loading-page-text-1.png" width={366} height={145} alt="" />
            </div>
            <div className={styles.progress}>
                <div className={styles.box}>
                    <img src="images/progress-bg.png" width={315} height={47} alt="" />
                    <div className={styles.progressbarContainer}>
                        <div className={styles.progressbar} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomText}>
                <img src="images/loading-page-text-2.png" width={336} height={46} alt="" />
            </div>
            <div className={styles.shadow}></div>
        </div>
    )
}