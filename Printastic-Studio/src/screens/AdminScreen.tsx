import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, TextInput, Button, Card, Portal, Modal, IconButton } from 'react-native-paper';
import { theme } from '../theme/theme';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

const AdminScreen = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Business Cards',
      price: '29.99',
      description: 'High-quality business cards with premium finishes',
      image: 'https://picsum.photos/700',
      category: 'Business'
    },
    {
      id: '2',
      name: 'Banners',
      price: '49.99',
      description: 'Large format printing for events and promotions',
      image: 'https://picsum.photos/701',
      category: 'Marketing'
    }
  ]);

  const [visible, setVisible] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.description) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        image: newProduct.image || 'https://picsum.photos/700',
        category: newProduct.category || 'General'
      };
      setProducts([...products, product]);
      setNewProduct({});
      hideModal();
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Button mode="contained" onPress={showModal} style={styles.addButton}>
          Add New Product
        </Button>
      </View>

      <View style={styles.productsGrid}>
        {products.map(product => (
          <Card key={product.id} style={styles.productCard}>
            <Card.Cover source={{ uri: product.image }} />
            <Card.Content>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <Text style={styles.productCategory}>{product.category}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="pencil"
                onPress={() => {}}
              />
              <IconButton
                icon="delete"
                onPress={() => handleDeleteProduct(product.id)}
              />
            </Card.Actions>
          </Card>
        ))}
      </View>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Text style={styles.modalTitle}>Add New Product</Text>
          <TextInput
            label="Product Name"
            value={newProduct.name}
            onChangeText={text => setNewProduct({...newProduct, name: text})}
            style={styles.input}
          />
          <TextInput
            label="Price"
            value={newProduct.price}
            onChangeText={text => setNewProduct({...newProduct, price: text})}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            label="Description"
            value={newProduct.description}
            onChangeText={text => setNewProduct({...newProduct, description: text})}
            multiline
            style={styles.input}
          />
          <TextInput
            label="Image URL"
            value={newProduct.image}
            onChangeText={text => setNewProduct({...newProduct, image: text})}
            style={styles.input}
          />
          <TextInput
            label="Category"
            value={newProduct.category}
            onChangeText={text => setNewProduct({...newProduct, category: text})}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleAddProduct} style={styles.submitButton}>
            Add Product
          </Button>
        </Modal>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.surface,
  },
  addButton: {
    backgroundColor: theme.colors.secondary,
  },
  productsGrid: {
    padding: theme.spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: theme.spacing.md,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: theme.spacing.sm,
  },
  productPrice: {
    color: theme.colors.secondary,
    fontSize: 14,
  },
  productCategory: {
    color: theme.colors.text,
    opacity: 0.7,
    fontSize: 12,
  },
  modal: {
    backgroundColor: 'white',
    padding: theme.spacing.lg,
    margin: theme.spacing.lg,
    borderRadius: theme.roundness,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
  },
  input: {
    marginBottom: theme.spacing.md,
  },
  submitButton: {
    marginTop: theme.spacing.md,
  },
});

export default AdminScreen; 