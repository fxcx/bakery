
import CardButton from "./CardButton";
import CardButtonAdd from "./CardButtonAdd";
import Image from "next/image";
// import { useState } from "react";
import React from "react";

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;

  const res = await fetch(`https://fake-api-bay.vercel.app`);
  const data = await res.json();

  return {
    props: {
      product: data 
    },
  };

}
export default function Card({data}) {

  return (
    <>
      <section>
        <article>
        </article>
      </section>
    </>
  );
}




