import styles from './index.module.css'

import { COLORS } from '@/constants'
const Toolbox = () => {

    const updateBrushSize = (e) => {

    }
    return (<div className={styles.toolboxContainer}>
        <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.BLACK}}/>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.RED}}/>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.GREEN}}/>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.BLUE}}/>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.ORANGE}}/>
                <div className={styles.colorBox} style={{backgroundColor: COLORS.YELLOW}}/>
            </div>
        </div>
        <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush Size</h4>
            <div className={styles.itemContainer}>
                <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
            </div>
        </div>
    </div>)
}

export default Toolbox;