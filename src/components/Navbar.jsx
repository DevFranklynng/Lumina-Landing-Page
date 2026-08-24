import { useState } from 'react';
import { ShoppingBag, User, Menu, X, Plus } from 'lucide-react';
import Container from './Container';

const navLinks = ['Home', 'New Arrivals', 'Best Selling', 'Reviews'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-1 text-white font-serif text-lg tracking-wide">
            <Plus size={14} strokeWidth={3} />
            LUMINA
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-white/90">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    i === 0 ? 'text-white font-medium border-b border-white/70 pb-1' : ''
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-white/90 hover:text-white">
              <ShoppingBag size={16} />
              My Cart
              <span className="flex items-center justify-center w-4 h-4 text-[10px] bg-white text-[#E2661F] rounded-full">
                1
              </span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors">
              <User size={16} className="text-white" />
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-6 text-white">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm">{link}</a>
            ))}
            <button className="flex items-center gap-2 text-sm">
              <ShoppingBag size={16} /> My Cart (1)
            </button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;