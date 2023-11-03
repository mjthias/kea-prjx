import Number from "@/components/Number";

export const metadata = {
  title: "Home",
  description: "A description",
};

export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return (
    <main>
      <h1>hej</h1>
      <img src={data.message} alt="" />
      <Number />
    </main>
  );
}
