import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {useSelector} from 'react-redux';
// import {SettingsProps} from '../interfaces';
import COLORS from '../config/COLORS';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    height: 105,
    alignItems: 'flex-end',
    paddingBottom: 10,
    zIndex: -1,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.catskillWhite,
  },
  headerButton: {
    minWidth: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Header {
  backgroundColor?: string;
  headerSize?: number;
  leftContent?: any;
  mainContent?: any;
  rightContent?: any;
}

const Header = (props: Header) => {
  return (
    <View>
      <View
        style={[
          styles.header,
          props.backgroundColor ? {backgroundColor: props.backgroundColor} : {},
          props.headerSize ? {height: props.headerSize} : {},
        ]}>
        <View style={styles.headerButton}>{props.leftContent}</View>
        <View style={styles.mainContent}>{props.mainContent}</View>
        {props.rightContent && (
          <View style={styles.headerButton}>{props.rightContent}</View>
        )}
      </View>
    </View>
  );
};

export default React.memo(Header);
