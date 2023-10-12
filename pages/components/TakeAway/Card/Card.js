import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
import Image from "next/image";
import useFetch from "../../utils/useFetch.js";

export default function Card () { 
  const {data} = useFetch("https://fake-api-bay.vercel.app/postres");
  
  return (
    <article>
      <div>
        <div className="flex flex-col p-5">
          <div className="overflow-hidden rounded-xl">
            {/* Verifica si data y data.postres están definidos antes de intentar acceder a sus propiedades */}
            {data.map((item) => (
              <div key={item.id}>
                <Image src={item.image} alt={item.name} width={200} height={200} />
                <p className="mt-3 text-lg text-slate-500">{item.price}</p>
                {item.description}
              </div>
            ))}
          </div>
          <CardButton />
          <CardButtonAdd />
        </div>
      </div>
    </article>
  );
}
