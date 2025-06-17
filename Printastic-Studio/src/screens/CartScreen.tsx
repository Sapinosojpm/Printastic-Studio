import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, List } from 'react-native-paper';
import { theme } from '../theme/theme';

const CartScreen = () => {
  const cartItems = [
    {
      id: '1',
      title: 'Business Cards',
      price: '29.99',
      quantity: 2,
    },
    {
      id: '2',
      title: 'Banners',
      price: '49.99',
      quantity: 1,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <ScrollView style={styles.scrollView}>
        {cartItems.map(item => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price} x {item.quantity}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <Card style={styles.totalCard}>
        <Card.Content>
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
          <Button mode="contained" style={styles.checkoutButton}>
            Proceed to Checkout
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: theme.colors.secondary,
  },
  totalCard: {
    marginTop: theme.spacing.md,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
  },
  checkoutButton: {
    marginTop: theme.spacing.sm,
  },
});

export default CartScreen; 