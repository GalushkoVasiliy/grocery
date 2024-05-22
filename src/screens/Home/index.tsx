import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import {FlashList} from '@shopify/flash-list';
import SingleProduct from './components/SingleProduct';
import {get_product_list} from '../../utils/requests';
import {useQuery} from '@tanstack/react-query';
import styles from './styles/styles';
import {Product} from '../../interfaces';

interface ProductItem {
  item: Product;
}
const Home = () => {
  const {data} = useQuery({
    queryKey: ['data'],
    queryFn: get_product_list,
  });

  const renderItem = ({item}: ProductItem) => {
    return <SingleProduct item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        leftContent={<View />}
        mainContent={<Text style={styles.headerText}>Home</Text>}
        rightContent={<View />}
      />

      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={100}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(Home);
