import React from "react";
import styles from "../../../styles/Components/Navigation/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoImage from '../../../assets/Navigation-Images/Veggiefied.png'
import AllProducts from "../App-Pages/AllProducts";
import Cart from "../App-Pages/Cart";
import Contact from "../App-Pages/Contact";
import AddProduct from "../App-Pages/AddProduct";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <picture>
          <Image src={logoImage} width={200} height={200} alt="Logo Image" />
        </picture>
      </div>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/Components/App-Pages/AddProduct">
            <a>Add Product</a>
          </Link>
        </li>
        <li>
          <Link href="/Components/App-Pages/AllProducts">
            <a>All products</a>
          </Link>
        </li>
        <li>
          <Link href="/Components/App-Pages/Cart">
            <a>Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/Components/App-Pages/Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default NavBar;