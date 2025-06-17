import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { theme } from '../theme/theme';

const ProductDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content style={styles.content}>
          <Text style={styles.title}>Business Cards</Text>
          <Text style={styles.price}>$29.99</Text>
          
          <View style={styles.chipContainer}>
            <Chip style={styles.chip}>Premium Quality</Chip>
            <Chip style={styles.chip}>Fast Delivery</Chip>
          </View>

          <Text style={styles.description}>
            High-quality business cards printed on premium card stock. 
            Available in various finishes including matte, glossy, and soft-touch.
            Perfect for making a lasting impression on your clients and partners.
          </Text>

          <View style={styles.specsContainer}>
            <Text style={styles.specsTitle}>Specifications:</Text>
            <Text style={styles.specsText}>• Size: 3.5" x 2"</Text>
            <Text style={styles.specsText}>• Paper: 16pt Premium Card Stock</Text>
            <Text style={styles.specsText}>• Printing: Full Color Both Sides</Text>
            <Text style={styles.specsText}>• Turnaround: 2-3 Business Days</Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.addToCartButton}
          onPress={() => {}}
        >
          Add to Cart
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  price: {
    fontSize: 20,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.md,
  },
  chipContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  chip: {
    marginRight: theme.spacing.sm,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: theme.spacing.lg,
    color: theme.colors.text,
  },
  specsContainer: {
    marginBottom: theme.spacing.lg,
  },
  specsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  specsText: {
    fontSize: 16,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  buttonContainer: {
    padding: theme.spacing.md,
  },
  addToCartButton: {
    padding: theme.spacing.sm,
  },
});

export default ProductDetailScreen; 