import Image from "next/image";
export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");

  const data = await res.json();

  return {
    title: data.name,

    description: `loves ${data.favouriteColor}`,
  };
}
export default async function Henry() {
  const data = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=henry"
  ).then((r) => r.json());
  const { name, image } = data;
  return (
    <main>
      <h1>{name}</h1>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={name}
        sizes="100vw"
        priority={true}
      />
    </main>
  );
}
