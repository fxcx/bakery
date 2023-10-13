import AxiosGet from "pages/components/utils/fetch.js";
import Image from "next/image";
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";

export default function FilterMenuButton() {
  const { data } = AxiosGet("https://fake-api-bay.vercel.app");

  return (
    <section>
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
  );
}
