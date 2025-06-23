import BookCarousel from "@/components/BookCarousel";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home.webp')",
        }}
      ></div>

      <div className="absolute inset-0 -z-10 bg-black opacity-40"></div>

      <div className="grid min-h-screen grid-cols-1 place-content-center p-5">
        <div className="w- justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">
            Discover Worlds Between Pages
          </h1>
          <p className="text-lg">
            Explore our curated collection of books for every reader — from
            timeless classics to the latest releases.
          </p>
        </div>
      </div>
      <BookCarousel />
    </div>
  );
}
