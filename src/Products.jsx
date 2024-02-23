import React from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts([...res.data]);
    });
  }, []);

  const addTocart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const cartItemCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className='position-relative d-flex'>
      <div className='main-card'>
        {products.map((product) => (
          <div key={product.id} className='card-group item-card'>
            <div className='card cardStyle1 addCard'>
              <img
                src={product.image}
                style={{ width: '200px', height: '200px' }}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body d-flex flex-column justify-content-between'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>
                  <small className='text-body-secondary'>
                    {product.category}
                  </small>
                </p>
                <button
                  className='btn btn-success'
                  onClick={() => {
                    addTocart(product);
                  }}
                >
                  Add item
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='border border-dark w-40'>
        <ProductsCard cartItems={cartItems} />
      </div>
      <i className='bi bi-cart4 cartimg'>
      {cartItemCount > 0 && (
            <span className="position-absolute badge bg-primary rounded-pill" style={{ top: '-1px', right: '-1px', fontSize:'10px'}}>
              {cartItemCount}
            </span>
          )}

      </i>
    </div>
  );
};

export default Products;
