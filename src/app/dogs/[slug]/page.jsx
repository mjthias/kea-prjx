// app/dogs/[slug]/page.jsx

import { notFound } from "next/navigation"; // DEN HER
import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Dog({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);

  if (res.status != 200) return notFound(); // DEN HER

  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  return (
    <main>
      <h1>{name}</h1>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
        priority
        sizes="(max-width: 500px) 100vw, 500px"
      />
    </main>
  );
}
