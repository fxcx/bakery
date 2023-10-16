import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
import Image from "next/image";
import  {useAxiosGet}  from "../../utils/usefetch";
import { useState } from "react";

export default function Card() {
  const [categoryFilter, setCategoryFilter] = useState('vinos');
  const { data, loading, error } = useAxiosGet(
    `https://fake-api-bay.vercel.app/${categoryFilter}`
  );

  const handleCategoryClick = (category) => {
    setCategoryFilter(category); // Actualiza el estado con la categoría seleccionada
  };

  return (
    <>
      <section>
        <button onClick={() => handleCategoryClick('vinos')}>Vinos</button>
        <button onClick={() => handleCategoryClick('bebidas')}>Bebidas</button>
        <button onClick={() => handleCategoryClick('cervezas')}>Cafetería</button>
        <button onClick={() => handleCategoryClick('menuInfantil')}>Cafetería</button>
        <button onClick={() => handleCategoryClick('menuPrincipal')}>Cafetería</button>
        <button onClick={() => handleCategoryClick('acompaniamiento')}>Cafetería</button>
        <article>
          {data.map((product) => (
            <div key={product.id}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <CardButton />
              <CardButtonAdd />
            </div>
          ))}
        </article>
      </section>
    </>
  );
}




