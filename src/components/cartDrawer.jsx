import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ShopContext } from '../ShopContext';

const drawerWidth = 320;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const CartItem = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
}));

const CartItemImage = styled(CardMedia)({
  width: '100px',
  height: '100px',
  flexShrink: 0,
});

const CartItemContent = styled(CardContent)({
  flex: 1,
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const QuantityControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& button': {
    minWidth: '32px',
    height: '32px',
    padding: 0,
  },
}));

const CartFooter = styled(Box)(({ theme }) => ({
  position: 'sticky',
  bottom: 0,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function PersistentDrawerRight({ open, setOpen }) {
  const theme = useTheme();
  const { cart, addToCart, removeFromCart } = useContext(ShopContext);

  const handleDrawerClose = () => {
    setOpen(false); 
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.amount), 0);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            סל קניות
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: 2,
          paddingBottom: 16
        }}>
          {cart.length === 0 ? (
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
              הסל ריק
            </Typography>
          ) : (
            cart.map((item) => (
              <CartItem key={item._id}>
                <CartItemImage
                  component="img"
                  image={item.image}
                  alt={item.title}
                />
                <CartItemContent>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }} noWrap>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      ₪{(item.price * item.amount).toFixed(2)}
                    </Typography>
                  </Box>
                  
                  <QuantityControl>
                    <IconButton
                      size="small"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ minWidth: '30px', textAlign: 'center' }}>
                      {item.amount}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => addToCart(item._id)}
                    >
                      <AddIcon />
                    </IconButton>
                  </QuantityControl>
                </CartItemContent>
              </CartItem>
            ))
          )}
        </Box>

        <CartFooter>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">סה״כ פריטים:</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {cart.reduce((sum, item) => sum + item.amount, 0)}
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">סה״כ:</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                ₪{totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            disabled={cart.length === 0}
          >
            לקנייה
          </Button>
        </CartFooter>
      </Drawer>
    </Box>
  );
}
