import Link from "next/link";

async function Menu() {
  const data = await fetch("https://nice-dogs.vercel.app/api/dogs").then((r) =>
    r.json()
  );
  return (
    <nav>
      <Link href="/" prefetch={false}>
        Home
      </Link>
      {data.map((d) => (
        <Link key={d.slug} href={`/dogs/${d.slug}`} prefetch={false}>
          {d.name}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
