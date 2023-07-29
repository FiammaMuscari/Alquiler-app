import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <section className="m-auto max-w-[20em] pt-[7em] flex justify-center flex-col items-center  text-center gap-3">
      <Image
        src="/lol.svg"
        width={200}
        height={200}
        className=""
        alt="profile-image m-auto"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste
        sit dolore quae rem error adipisci nulla nisi iusto perferendis magni
        eum beatae pariatur distinctio dolor repellendus, fugit sequi libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste
        sit dolore quae rem error adipisci nulla nisi iusto perferendis.
      </p>
    </section>
  );
}
