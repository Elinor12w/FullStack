import { useContext, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  IconButton,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ShopContext } from '../ShopContext';

const AdminPage = () => {
  const { products, setProducts } = useContext(ShopContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  const handleOpenDialog = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        image: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) throw new Error('Failed to add product');
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      handleCloseDialog();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${editingProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) throw new Error('Failed to update product');
      const updatedProduct = await response.json();
      setProducts(products.map(p => p._id === editingProduct._id ? updatedProduct : p));
      handleCloseDialog();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('אתה בטוח שברצונך למחוק את המוצר?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete product');
      setProducts(products.filter(p => p._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleSubmit = () => {
    if (editingProduct) {
      handleUpdateProduct();
    } else {
      handleAddProduct();
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>דף הניהול</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          הוסף מוצר
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>שם</strong></TableCell>
              <TableCell><strong>תיאור</strong></TableCell>
              <TableCell align="right"><strong>מחיר</strong></TableCell>
              <TableCell><strong>קטגוריה</strong></TableCell>
              <TableCell align="center"><strong>פעולות</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.description?.substring(0, 50)}...</TableCell>
                <TableCell align="right">₪{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(product)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingProduct ? 'עדכן מוצר' : 'הוסף מוצר חדש'}
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
          <TextField
            label="שם המוצר"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="תיאור"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="מחיר"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            fullWidth
            inputProps={{ step: '0.01' }}
          />
          <TextField
            label="קטגוריה"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="קישור תמונה"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>ביטול</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {editingProduct ? 'עדכן' : 'הוסף'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPage;
