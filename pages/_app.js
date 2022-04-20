import "../styles/globals.scss";
import Layout from "./Components/Navigation/Layout";

function MyApp({ Component, pageProps }) {


  function myFunction() {
    const element = document.querySelector(".theme-container");
    element.classList.toggle("blueTheme");
  }

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
