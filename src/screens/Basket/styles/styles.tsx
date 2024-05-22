import {StyleSheet} from 'react-native';
import COLORS from '../../../config/COLORS';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
  },
  list: {paddingHorizontal: 15, paddingTop: 15},
  totalContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  singleProduct: {gap: 15, flexDirection: 'row', marginBottom: 10},
  productImage: {
    width: 80,
    height: 80,
  },
  name: {fontWeight: '600'},
  price: {fontWeight: '800'},
  deleteButton: {
    justifyContent: 'center',
  },
  productInfo: {
    justifyContent: 'center',
    flex: 1,
  },
  // addToBasketContainer: {flexDirection: 'row', gap: 10},
  // counterContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderRadius: 15,
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   borderColor: COLORS.mystic,
  //   height: 40,
  //   alignItems: 'center',
  // },
  // changeCountButton: {
  //   height: 20,
  //   width: 20,
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});

export default styles;
