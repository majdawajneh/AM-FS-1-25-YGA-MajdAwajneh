import Link from "next/dist/client/link";

export default function HomePage() {


  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold"> 🏠Home Page </h1>

        <ul className="list-disc list-inside mt-4 list-none">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </ul>
    </div>
  );
}