import CardButton from "../Card/CardButton";
import CardButtonAdd from "../Card/CardButtonAdd";
import Image from "next/image";

function Infantil({ infantil }) {
  return (
    <div className="flex items-center justify-center my-28 md: w-80 h-auto">
      <div className="flex flex-col p-5 h-100">
        <div className="overflow-hidden rounded-xl">
          <Image
            className="object-contain center"
            src={infantil.image}
            alt={infantil.name}
          />
        </div>
        <h5 className="mt-3 text-2xl font-medium md:text-3xl">
          {infantil.name}
        </h5>
        <p className="mt-3 text-lg text- text-slate-500">
          {`$ ${infantil.price}`}
        </p>
        <CardButton />
        <CardButtonAdd />
      </div>
    </div>
  );
}

export default Infantil;
