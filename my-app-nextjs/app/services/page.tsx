import link from "next/link";

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-yellow-800">
                <h1 className="text-3xl font-bold text-center">Services Page🛠️</h1>
                <p className="mt-4">Welcome to our Services Page! We offer a wide range of services to meet your needs.</p>
                <ul className="list-disc list-inside mt-4">
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                    <li>Digital Marketing</li>
                </ul>
                <p className="mt-4">Contact us to learn more about our services and how we can help you achieve your goals!</p>
            </div>
        </div>
    );
}
