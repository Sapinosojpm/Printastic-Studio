import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Text, Card, Button, Chip, Searchbar } from 'react-native-paper';
import { theme } from '../theme/theme';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const featuredProducts = [
    {
      id: '1',
      title: 'Business Cards',
      price: '29.99',
      image: 'https://picsum.photos/700',
      category: 'Business'
    },
    {
      id: '2',
      title: 'Banners',
      price: '49.99',
      image: 'https://picsum.photos/701',
      category: 'Marketing'
    },
    {
      id: '3',
      title: 'Flyers',
      price: '19.99',
      image: 'https://picsum.photos/702',
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Business', 'Marketing', 'Personal', 'Events'];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://picsum.photos/800/400' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Printastic Studio</Text>
          <Text style={styles.heroSubtitle}>Your Creative Printing Partner</Text>
          <Button
            mode="contained"
            style={styles.heroButton}
            onPress={() => navigation.navigate('Catalog')}
          >
            Explore Products
          </Button>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <Searchbar
          placeholder="Search products..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <Chip
            key={index}
            style={styles.categoryChip}
            mode="outlined"
            onPress={() => {}}
          >
            {category}
          </Chip>
        ))}
      </ScrollView>

      {/* Featured Products */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <View style={styles.productsGrid}>
          {featuredProducts.map(product => (
            <Card
              key={product.id}
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail', { product })}
            >
              <Card.Cover source={{ uri: product.image }} />
              <Card.Content>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Chip style={styles.productCategory}>{product.category}</Chip>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesGrid}>
          <Card style={styles.serviceCard}>
            <Card.Content>
              <Text style={styles.serviceTitle}>Fast Delivery</Text>
              <Text style={styles.serviceDescription}>
                Get your prints delivered within 2-3 business days
              </Text>
            </Card.Content>
          </Card>
          <Card style={styles.serviceCard}>
            <Card.Content>
              <Text style={styles.serviceTitle}>Quality Guarantee</Text>
              <Text style={styles.serviceDescription}>
                Premium quality printing with satisfaction guarantee
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  heroSection: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.surface,
    marginBottom: theme.spacing.sm,
  },
  heroSubtitle: {
    fontSize: 18,
    color: theme.colors.surface,
    marginBottom: theme.spacing.lg,
  },
  heroButton: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.xl,
  },
  searchSection: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
  },
  searchBar: {
    elevation: 0,
    backgroundColor: theme.colors.background,
  },
  categoriesContainer: {
    paddingHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.md,
  },
  categoryChip: {
    marginRight: theme.spacing.sm,
  },
  featuredSection: {
    padding: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: width / 2 - theme.spacing.md * 1.5,
    marginBottom: theme.spacing.md,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: theme.spacing.sm,
  },
  productPrice: {
    color: theme.colors.secondary,
    fontSize: 14,
    marginTop: theme.spacing.xs,
  },
  productCategory: {
    marginTop: theme.spacing.xs,
  },
  servicesSection: {
    padding: theme.spacing.md,
  },
  servicesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: theme.colors.primary,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.surface,
    marginBottom: theme.spacing.xs,
  },
  serviceDescription: {
    color: theme.colors.surface,
    opacity: 0.8,
  },
});

export default HomeScreen; 