import MapaContacto from "./mapaContacto";
import FormularioContacto from "./formularioContact";

export default function ContactoComponent() {
  return (
    <section className='bg-[url("/images/contact-banner.jpg")] w-full h-screen mx-auto bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className="absolute inset-0 bg-black/60"></div>
      <div>
        <FormularioContacto />
      </div>
      <div> 
        <MapaContacto />
      </div>
    </section>
  );
}
