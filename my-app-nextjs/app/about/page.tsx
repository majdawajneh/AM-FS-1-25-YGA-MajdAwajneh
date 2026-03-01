import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8 text-lg">
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-green-800">
                <h1 className="text-3xl font-bold text-center">About Page👋</h1>
                <p className="mt-4">Welcome to our About Page! We are excited to share more about our company and team with you.</p>
                <p className="mt-4">Our mission is to provide high-quality products and services that meet the needs of our customers. We are committed to innovation, excellence, and customer satisfaction.</p>
                <p className="mt-4">Thank you for visiting our About Page. We look forward to connecting with you!</p>
            </div>
        </div>
    );
}