import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
import Image from "next/image";
import AxiosGet from '../../utils/fetch'

export default function Card() {
  const { data } = AxiosGet("https://fake-api-bay.vercel.app/menuInfantil");

  return (
    <section>
      <article>
        {data.map((product) => (
          <div key={product.id}>
            <Image src={product.image} alt={product.name} width={200} height={200} />
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
