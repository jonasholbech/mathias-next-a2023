import Link from "next/link";
export const metadata = {
  title: "HER ER VOVSER",
  description: "massere af vovser",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hej</h1>
      <Link href="/henry" prefetch={false}>
        Henry
      </Link>
    </main>
  );
}
