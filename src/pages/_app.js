import "/styles/globals.css";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/Navbar/Navbar.js";
import { CartProvider } from "./context/cartContext";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
//import FooterShowCart from "./components/footer/FooterShowCart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* <FooterShowCart /> */}
      </ThemeContextProvider>
    </CartProvider>
  );
}
