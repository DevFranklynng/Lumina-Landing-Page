import { ShoppingBag, UserRound } from "lucide-react";

function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-7 py-6">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.12em] text-white"
        >
          <span className="text-sm">✦</span>
          LUMINA
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md md:flex">
          <a
            href="#"
            className="rounded-full bg-white/15 px-4 py-1.5 text-[10px] text-white"
          >
            Home
          </a>

          <a
            href="#products"
            className="rounded-full px-4 py-1.5 text-[10px] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            New Arrivals
          </a>

          <a
            href="#products"
            className="rounded-full px-4 py-1.5 text-[10px] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Best Selling
          </a>

          <a
            href="#reviews"
            className="rounded-full px-4 py-1.5 text-[10px] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Reviews
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          <button className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] text-white backdrop-blur-md">
            <ShoppingBag size={13} strokeWidth={1.5} />

            My Cart

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] text-black">
              3
            </span>
          </button>

          <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md">
            <UserRound size={12} strokeWidth={1.5} />
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;