import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

 const SingleProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [productId]);

  if (!product) return <p style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>Loading...</p>;

   return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />

        <h1 style={styles.title}>{product.name}</h1>

        <h2 style={styles.price}>{product.price} ₪</h2>

        <p style={styles.description}>{product.description}</p>

        <Link to="/" style={styles.backBtn}>
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};
  const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
  },
  card: {
    width: "400px",
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px #7c9eca",
    textAlign: "center",
  },
  image: {
    width: "50%",
    height: "250px",
    objectFit: "",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    marginBottom: "10px",
  },
  price: {
    color: "#176fe3",
    marginBottom: "15px",
  },
  description: {
    marginBottom: "20px",
    color: "#1c1b1b",
  },
  backBtn: {
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#176fe3cd",
    color: "#fff",
    borderRadius: "8px",
    display: "inline-block",
  },
};
export default SingleProductPage;
