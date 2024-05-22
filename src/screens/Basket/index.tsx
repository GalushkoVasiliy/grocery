import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Header from '../../components/Header';
import {useQuery} from '@tanstack/react-query';
import {get_basket_list} from '../../utils/requests';
import BasketProduct from './components/BasketProduct';
import styles from './styles/styles';

interface Product {
  id: number;
  product_name: string;
  price: string;
  image: string;
  counter: number;
}

interface RenderItemProps {
  item: Product;
}

const Basket = () => {
  const {data, refetch, status} = useQuery({
    queryKey: ['basket'],
    queryFn: get_basket_list,
  });

  const renderItem = useCallback(({item}: RenderItemProps) => {
    return <BasketProduct item={item} onRefresh={refetch} />;
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalBasketPrice = (list: Product[]) => {
    const total = list.reduce((sum, item) => {
      return sum + parseFloat(item.price) * item.counter;
    }, 0);

    setTotalPrice(total);
  };

  useEffect(() => {
    if (status === 'success') {
      getTotalBasketPrice(data);
    }
  }, [status, data]);

  return (
    <View style={styles.container}>
      <Header
        leftContent={<View />}
        mainContent={<Text style={styles.headerText}>Basket</Text>}
        rightContent={<View />}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        keyExtractor={item => `${item.id}`}
        data={data}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <Text>Total: </Text>
        <Text>{totalPrice}</Text>
      </View>
    </View>
  );
};

export default React.memo(Basket);
