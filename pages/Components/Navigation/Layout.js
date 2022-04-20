import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from '../../../styles/Components/Navigation/Layout.module.scss'
const Layout = ({ children }) => {
    return (
      <div className={styles.layoutContainer}>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
}
 
export default Layout;