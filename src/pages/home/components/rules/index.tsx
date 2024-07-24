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
                <div className={styles.title}>规则</div>
                <div onClick={() => setOpenDrawer()}>X</div>
            </div>
            <div className={styles.context}>
                <div>则件带采做省张引商真大林周在入必体天示生争般查条才据义次许分反形委公结发石现别容种交达收革给但何表上山对七气行置西直场任始第都我济联容也大人满外马二格。作生合技切身题要自养京类起直开此间先中办将立决本自式质选反事列严对国类立东素报太放农活选老处色作当导商此例本养压律同张组数四行土儿山四手型要养。</div>
                <div>二此过心现改史六置交石作要军不不第极况并用百部取半队只维场术义万次历和者计许片响全带工油济会。线八八所美正将半候使道将证元联整采许新数查派么整教反交意下问大酸水样它通任派能所次面书京立把子你备想所用。</div>
                <div>其立却县劳感无制步中对办毛则再干亲利世九给备受育称况给义型克记更物别南世属空从据人取者产热按了达安力战候时战色通主毛济子委用算济。般提响话约平压作记半面我选志马时一周音经从水际接根使查十发件如间包些九转计接五权文正率气厂下前些面原合建算张办政求养系动利水问研始个属细低光林。</div>
            </div>
        </Drawer>
    )
}
