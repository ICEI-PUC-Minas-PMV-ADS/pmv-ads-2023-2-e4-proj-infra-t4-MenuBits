export default function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center">
          <img src="/public/logo2.jpeg" className="h-14 mr-3" alt="Logo" />
        </a>
        <div className="flex items-center">
          <a href="/" className="mr-6 text-md text-white">
            Inicio
          </a>
          <a href="/about" className="text-md text-blue-600">
            Sobre
          </a>
        </div>
      </div>
    </nav>
  );
}
