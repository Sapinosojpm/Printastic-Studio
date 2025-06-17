import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { theme } from '../theme/theme';

const products = [
  {
    id: '1',
    title: 'Business Cards',
    price: '29.99',
    image: 'https://picsum.photos/700',
  },
  {
    id: '2',
    title: 'Banners',
    price: '49.99',
    image: 'https://picsum.photos/701',
  },
  {
    id: '3',
    title: 'Flyers',
    price: '19.99',
    image: 'https://picsum.photos/702',
  },
];

const CatalogScreen = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title title={item.title} subtitle={`$${item.price}`} />
      <Card.Actions>
        <Button mode="contained" onPress={() => {}}>
          Add to Cart
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    paddingBottom: theme.spacing.lg,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
});

export default CatalogScreen; 