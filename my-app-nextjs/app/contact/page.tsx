import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8 text-lg">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-blue-800">
                <h1 className="text-3xl font-bold text-center">Contact Page📞</h1>
                <p className="mt-4">Welcome to our Contact Page! Feel free to reach out to us.</p>
                <input type="text" placeholder="Enter your name" className="border border-gray-300 rounded px-4 py-4 mt-4 w-full mb-4" />
                <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded px-4 py-2 mt-4 w-full mb-4" />
                <textarea placeholder="Enter your message" className="border border-gray-300 rounded px-4 py-2 mt-4 w-full h-32"></textarea>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 cursor-pointer">Send Message</button>
            </div>
        </div>
    );
}