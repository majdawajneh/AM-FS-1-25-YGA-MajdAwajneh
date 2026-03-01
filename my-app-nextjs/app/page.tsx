export default function HomePage() {


  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold"> 🏠Home Page </h1>

        <ul className="list-disc list-inside mt-4">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>

        </ul>
    </div>
  );
}