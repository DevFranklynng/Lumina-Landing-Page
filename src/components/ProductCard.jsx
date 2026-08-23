import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden bg-[#FBF6F0] aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <Heart size={16} className={liked ? 'fill-[#E2661F] text-[#E2661F]' : 'text-[#1A1A1A]'} />
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm font-medium text-[#1A1A1A]">{product.name}</p>
          <p className="text-xs text-[#8A8A8A]">{product.category}</p>
        </div>
        <p className="text-sm font-semibold text-[#E2661F]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;