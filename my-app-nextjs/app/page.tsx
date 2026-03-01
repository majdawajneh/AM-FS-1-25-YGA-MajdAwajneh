import Link from "next/dist/client/link";

export default function HomePage() {


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Welcome to the Home Page! 🏠</h1>
      <p className="mt-4 text-center">This is the main landing page of our Next.js application. Explore our services, learn about us, or get in touch!</p>
      <div className="mt-6 flex justify-center space-x-4">
        <Link href="/about" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">About Us</Link>
        <Link href="/services" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Services</Link>
        <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact</Link>
      </div>
    </div>
  );
}