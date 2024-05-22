import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useMutation} from '@tanstack/react-query';
import FastImageComponent from '../../../components/FastImageComponent';
import {
  add_product_to_basket,
  get_single_product,
  update_product_for_basket,
} from '../../../utils/requests';
import styles from '../styles/styles';
import {Product} from '../../../interfaces';

interface Props {
  item: {
    id: number;
    product_name: string;
    price: string;
    image: string;
  };
}

const SingleProduct = ({item}: Props) => {
  const [counter, setCounter] = useState(0);

  const addToBasketMutation = useMutation({
    mutationFn: add_product_to_basket,
    onSuccess: res => {
      showToast(res);
      setCounter(0);
    },
  });

  const updateBasketProduct = useMutation({
    mutationFn: update_product_for_basket,
    onSuccess: res => {
      showToast(res);
      setCounter(0);
    },
  });

  const checkExistBasketProduct = useMutation({
    mutationFn: get_single_product,
    onSuccess: res => {
      addToBasket(res);
    },
  });

  const addToBasket = (res?: Product) => {
    if (res && res.counter) {
      updateBasketProduct.mutate({
        id: item.id,
        product: {
          ...item,
          counter: res.counter + counter,
        },
      });
    } else {
      addToBasketMutation.mutate({
        ...item,
        counter: counter,
      });
    }
  };

  const showToast = (res: boolean) => {
    Toast.show({
      type: res ? 'success' : 'error',
      text1: res ? 'Product was successfully added 👋' : 'Something was wrong',
    });
  };

  return (
    <View style={styles.containerSingleProduct}>
      <View style={styles.singleProduct}>
        <FastImageComponent style={styles.productImage} uri={item.image} />

        <Text style={styles.name}>{item.product_name}</Text>
        <Text style={styles.price}>{item.price}$</Text>

        <View style={styles.addToBasketContainer}>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.changeCountButton}
              onPress={() => {
                setCounter(prev => (prev === 0 ? prev : prev - 1));
              }}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity
              style={styles.changeCountButton}
              onPress={() => {
                setCounter(prev => prev + 1);
              }}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => checkExistBasketProduct.mutate(item.id)}
            disabled={counter === 0}
            style={styles.addButton}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(SingleProduct);
