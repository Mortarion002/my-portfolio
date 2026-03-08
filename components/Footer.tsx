export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-zinc-500 mt-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        © {new Date().getFullYear()} Aman Kumar
      </div>
    </footer>
  );
}
