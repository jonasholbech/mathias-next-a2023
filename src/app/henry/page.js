export default async function Henry() {
  const data = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=henry"
  ).then((r) => r.json());
  const { name, image } = data;
  return (
    <main>
      <h1>{name}</h1>
      <img src={image.url} alt="" />
    </main>
  );
}
