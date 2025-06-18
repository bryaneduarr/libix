export default function Page() {
  return (
    <div className="relative min-h-screen pt-20">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home.webp')",
        }}
      ></div>

      <div className="absolute inset-0 -z-10 bg-black opacity-40"></div>

      <div className="grid min-h-screen grid-cols-2">
        <div className="text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Our App</h1>
          <p className="text-lg">This is a simple landing page.</p>
        </div>
      </div>
    </div>
  );
}
