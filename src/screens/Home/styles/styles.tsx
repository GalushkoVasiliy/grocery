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
  containerSingleProduct: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.white,
  },
  singleProduct: {
    borderRadius: 10,
    height: 270,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  productImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
  name: {fontWeight: '600'},
  price: {fontWeight: '800'},
  addToBasketContainer: {flexDirection: 'row', gap: 10},
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: COLORS.mystic,
    height: 40,
    alignItems: 'center',
  },
  changeCountButton: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
