import { notFound } from "next/navigation";
//export const dynamic = "force-static";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const res = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=" + params.slug
  );
  const data = await res.json();
  return {
    title: data.name,
    description: `loves ${data.favouriteColor}`,
  };
}
export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export default async function Henry({ params }) {
  const res = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=" + params.slug
  );
  if (res.status != 200) return notFound();
  const data = await res.json();
  //.then((r) => r.json());
  const { name, image, favouriteColor, age } = data;
  console.log(data);
  return (
    <main>
      <h1>{name}</h1>
      <p>Color: {favouriteColor ? favouriteColor : !"Hot Pink"}</p>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
        sizes="(max-width: 500px) 100vw, 500px"
        priority={true}
      />
    </main>
  );
}
