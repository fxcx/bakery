/***** COMPONENTS  *****/
import CartaHeader from "../src/components/carta_online/cartaHeader";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext } from "react";
import CartaPrincipal from "../src/components/carta_online/cartaPrincipal";

export default function CartaOnline() {
  const data = useContext(ThemeContext);
  const [theme] = data;
  return (
    <main className={theme}>
      <CartaHeader />
      <CartaPrincipal />
    </main>
  );
}
