import styles from "../../../styles/Components/AppPages/AllProducts.module.scss";
import { useEffect, useState } from "react";
import { addedProducts } from "../../../data/AddedProducts";
import Image from "next/image";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("/api/ApiInfo");
    const data = await response.json();
    setProducts(data);
    const showProductsButton = document.getElementById("showProductsButton");
    showProductsButton.style.display = "none";
  };

  const container = () =>{
    document.getElementById("container").style.background =
      "url('https://res.cloudinary.com/dpvum48vk/image/upload/v1650314386/Themes/landing-bottom-white-blue_newx2g.svg')";

  } 
  


  return (
    <div className={styles.container} id='container'>
      <div className={styles.container__loadProductsInfo}>
        <button onClick={fetchProducts} id="showProductsButton">
          See all the products we have fmm
        </button>
      </div>

      <div className={styles.container__products}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.card}>
              <picture>
                <Image
                  src={product.image}
                  height={350}
                  width={350}
                  alt="your URL is not a valid one"
                />
              </picture>
              <div className={styles.productsInfoContainer}>
                <h1>{product.title}</h1>
                <p id={styles.descriptionContainer}>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={container}>Save</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
