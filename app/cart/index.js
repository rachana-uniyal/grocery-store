import {View, Text,TouchableOpacity, FlatList, Image} from 'react-native'
import { icons } from '../../constants'
import styles from './cart.styles';

const ShoppingCart = () =>{


const DATA = [
  { id: '1', title: 'Bananas', price: '7.90', quantity: 1, thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" },
  { id: '2', title: 'Package 01', price: '7.90', quantity: 2 ,thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"},
  // ... other items
];

const renderItem = ({ item }) => (

  
    <View style={styles.itemContainer}>
      <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
      <View style={styles.titlePriceWrapper}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textStyle}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton}>
          <Image source={icons.minus}/>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Image source={icons.plus}/>
        </TouchableOpacity>
      </View>
    </View>
  );




      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={icons.backarrow}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Shopping Cart (5)</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.totalSection}>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Subtotal</Text>
              <Text style={styles.priceText}>$35.96</Text>
            </View>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Delivery</Text>
              <Text style={styles.priceText}>$2.00</Text>
            </View>
            <View style={styles.subSectionWrapper}>
              <Text style={styles.subSectionText}>Total</Text>
              <Text style={styles.totalText}>$37.96</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

export default ShoppingCart;