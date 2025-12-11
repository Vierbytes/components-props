import type { ProductDisplayProps } from '../../types';
import './ProductDisplay.css';

const ProductDisplay = ({ product, showDescription = true, showStockStatus = true, onAddToCart, children }: ProductDisplayProps) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      {showDescription && <p className="product-desc">{product.description}</p>}
      {showStockStatus && (
        <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-stock'}`}>
          {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
        </span>
      )}
      {children && <div className="product-extra">{children}</div>}
      {onAddToCart && product.inStock && (
        <button className="cart-btn" onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDisplay;
