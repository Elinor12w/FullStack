// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router";
// import { ShopContext } from "../ShopContext";








// export const ProductInfo = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const { cart, addToCart, removeFromCart } = useContext(ShopContext);
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (loading) return <div>טוען...</div>;
//   if (!product) return <div>המוצר לא נמצא</div>;

//   const cartItem = cart.find((item) => item.id === product.id);
//   const amount = cartItem ? cartItem.amount : 0;

//   return (
//     <div className="product-detail">
//       <button onClick={() => navigate(-1)} className="back-button">
//         ← חזור
//       </button>

//       <div className="product-detail-content">
//         <div className="product-detail-image">
//           <img src={product.image} alt={product.title} />
//         </div>

//         <div className="product-detail-info">
//           <h1>{product.title}</h1>
//           <p className="category">קטגוריה: {product.category}</p>
//           <p className="description">{product.description}</p>
//           <h2 className="price">₪{product.price}</h2>
          
//           <div className="product-detail-buttons">
//             <button onClick={() => addToCart(product)}>הוסף לעגלה</button>
//             {amount > 0 && (
//               <>
//                 <span className="amount">{amount}</span>
//                 <button onClick={() => removeFromCart(product)}>הסר מהעגלה</button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
