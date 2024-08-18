
import Map from "../componants/Map"
import Sidebar from "../componants/Sidebar"
import User from "../componants/User"
import styles from './Applayout.module.css'
function Applayout() {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <Map />
            <User />
        </div>
    )
}

export default Applayout
