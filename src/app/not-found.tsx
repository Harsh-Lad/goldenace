import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center py-6 my-3.5 space-y-10 min-h-24 sm:min-h-40 md:min-h-52 lg:min-h-60">
      <p className="text-[6vw] font-black font-anton whitespace-pre-line leading-none m-0 p-0">
        Page not found.
      </p>

      <Link
        href="/"
        className="text-[#FFBF00] hover:text-[#FFBF00] underline accent-[#FFBF00] block mt-4"
      >
        Go back to home
      </Link>
    </main>
  );
}
