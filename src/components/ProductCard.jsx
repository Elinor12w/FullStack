import { useContext } from "react";
import { ShopContext } from "../ShopContext.jsx";
import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: 0,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
// const CartBadge = styled(Badge)`
//   & .${badgeClasses.badge} {
//     top: -12px;
//     right: -6px;
//   }
// `;

export const ProductCard = (props) => {
  const { cart, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  // Find the item in cart to get its amount
  const cartItem = cart.find((item) => item._id === props.id);
  const amount = cartItem ? cartItem.amount : 0;

  const handleNavigateToProductPage = () => {
    navigate(`/products/${props.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image" onClick={handleNavigateToProductPage}>
        <img src={props.img} alt={props.itemName} />
      </div>

      <div className="product-controls">
        <button className="qty-btn" onClick={() => addToCart(props.id)}>
          +
        </button>
        {/* 
        <IconButton className="cart-btn">
          <ShoppingCartIcon fontSize="medium" />
          <CartBadge badgeContent={amount} color="primary" overlap="circular" />
        </IconButton> */}

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={amount} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <button
          className="qty-btn"
          disabled={amount === 0}
          onClick={() => removeFromCart(props.id)}
        >
          -
        </button>
      </div>

      <div className="product-info">
        <h5>{props.itemName}</h5>
        <h6 className="price">${props.price}</h6>     

      </div>
    </div>

          



  );
}
