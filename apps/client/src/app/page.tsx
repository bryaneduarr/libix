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
    </div>
  );
}
