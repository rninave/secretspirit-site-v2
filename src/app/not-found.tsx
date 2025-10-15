import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-bold text-primary mb-4 font-display">404</h1>
      <h2 className="text-2xl font-semibold mb-2 font-display">Page Not Found</h2>
      <p className="text-body mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-full font-display font-medium shadow-btn hover:bg-primary/90 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
