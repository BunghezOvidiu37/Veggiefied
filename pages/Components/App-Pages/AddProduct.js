import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Components/AppPages/AddProducts.module.scss";
import { forbiddenWords } from "../../../data/ForbiddenWords";
// import { CheckingUrl } from "../../../data/CheckingUrl";

const AddProductPage = () => {
  // !checking frbidden words in user's input
  const [titleInput, setTitleInput] = useState("");
  const inputTitleChecking = (e) => {
    setTitleInput(e.target.value);
  };
  useEffect(() => {
    const theme = document.getElementById("themeContainer");
    if (forbiddenWords.test(titleInput)) {
      document.querySelector(".titleInput").style.background = "red";
      theme.style.background =
        "url('https://res.cloudinary.com/dpvum48vk/image/upload/v1650482563/Themes/background-add-product-inputError_wio5oz.svg')";
      theme.style.transition = "1s";
      theme.style.backgroundRepeat = "no-repeat";
      theme.style.backgroundSize = "cover";
      theme.style.backgroundPosition = "bottom";
    } else {
      document.querySelector(".titleInput").style.background = "white";
      document.getElementById("themeContainer");
      theme.style.background =
        "url('https://res.cloudinary.com/dpvum48vk/image/upload/v1650482598/Themes/background-add-product_snq4rs.svg')";
      theme.style.transition = "1s";
      theme.style.backgroundRepeat = "no-repeat";
      theme.style.backgroundSize = "cover";
      theme.style.backgroundPosition = "bottom";
    }
  });

  const [products, setProducts] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitProduct = async () => {
    const response = await fetch("/api/ApiInfo", {
      method: "POST",
      body: JSON.stringify({ image, title, description, price }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className={styles.container} id="themeContainer">
        <div className={styles.container__wrapper}>
          <div className="shownOnThemeChange"></div>
          <form onSubmit={submitProduct} className={styles.form}>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              // onInput={inputUrlChecking}
              placeholder="enter url here"
              className="urlInput"
              // pattern="https://.*"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onInput={inputTitleChecking}
              placeholder="title goes here"
              className="titleInput"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // onInput={inputHandler}
              placeholder="description"
              // className="inputError"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              // onInput={inputHandler}
              placeholder="imi datorezi bani"
              // className="inputError"
            />
            <input
              type="submit"
              id={styles.formSubmit}
              // value={bla}
              // placeholder="haida"
              // onClick={submitProduct}
            />
          </form>
        </div>
      </div>
      <div className={styles.testContainer}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.productContainer}>
              <picture>
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt="bla"
                  placeholder="blur"
                  blurDataURL
                />
              </picture>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddProductPage;
