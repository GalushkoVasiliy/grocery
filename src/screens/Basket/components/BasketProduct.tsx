import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImageComponent from '../../../components/FastImageComponent';
import {useMutation} from '@tanstack/react-query';
import {delete_product_from_basket} from '../../../utils/requests';
import styles from '../styles/styles';
import Toast from 'react-native-toast-message';

interface Props {
  item: {
    id: number;
    product_name: string;
    price: string;
    image: string;
    counter: number;
  };
  onRefresh: () => void;
}

const BasketProduct = ({item, onRefresh}: Props) => {
  const mutation = useMutation({
    mutationFn: delete_product_from_basket,
    onSuccess: res => {
      showToast(res);

      if (res) {
        onRefresh();
      }
    },
  });

  const showToast = (res: boolean) => {
    Toast.show({
      type: res ? 'success' : 'error',
      text1: res ? 'Product was successfully added 👋' : 'Something was wrong',
    });
  };

  return (
    <View style={styles.singleProduct}>
      <FastImageComponent style={styles.productImage} uri={item.image} />
      <View style={styles.productInfo}>
        <Text style={styles.name}>{item.product_name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.price}>Count: {item.counter}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          mutation.mutate(item.id);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(BasketProduct);
