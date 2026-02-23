import { SortSection } from "./SortSection";
import { PriceSlider } from "./priceSlider";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { Link } from "react-router";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const NavSection = ({ open, setOpen }) => {
  const { cart } = useContext(ShopContext);

  const handleDrawerOpen = () => {

    setOpen(true);
  };

  return (
    <nav className="product-filter">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h1 style={{ color: "#1461dccc", fontSize: "40px" }}>My amazing store</h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Tooltip title="Admin Panel">
            <Link to="/admin">
              <IconButton color="default" aria-label="admin panel">
                <AdminPanelSettingsIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <IconButton
            color="default"
            aria-label="open cart"
            onClick={handleDrawerOpen}
          >
            <StyledBadge badgeContent={cart.reduce((sum, item) => sum + item.amount, 0)} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      <div className="filter-controls">
        <div className="sort-control">
          <SortSection />
        </div>
        <div className="price-control">
          <PriceSlider />
        </div>
      </div>
    </nav>
  );
};