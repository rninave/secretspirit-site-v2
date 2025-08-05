export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 border-t border-gray-200 text-center text-sm text-gray-500 mt-auto">
      &copy; {new Date().getFullYear()} Secret Spirit. All rights reserved.
    </footer>
  );
}