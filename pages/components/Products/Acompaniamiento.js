import CardButton from "../Card/CardButton";
import CardButtonAdd from "../Card/CardButtonAdd";
import Image from "next/image";
function Acompaniamiento({ acompaniamiento }) {
 
    return (
    <div className="flex items-center justify-center my-28 md: w-80 h-auto">
      <div className="flex flex-col p-5 h-100">
        <div className="overflow-hidden rounded-xl">
          <Image
            className="object-contain center"
            src={ acompaniamiento.image }
            alt={ acompaniamiento.name }
          />
        </div>
        <h5 className="mt-3 text-2xl font-medium md:text-3xl">
          {acompaniamiento.name}
        </h5>
        <p className="mt-3 text-lg text- text-slate-500">
          {`$ ${acompaniamiento.price}`}
        </p>
        <CardButton />
        <CardButtonAdd />
      </div>
    </div>
  );
}

export default Acompaniamiento;
