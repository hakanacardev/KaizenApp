import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../assets/colors';
import Compass from '../../assets/compass.svg';
import Star from '../../assets/star.svg';
import Plus from '../../assets/plus.svg';

const Nav: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <Compass />
        <Text>Keşfet</Text>
      </View>
      <View style={styles.plusItem}>
        <Plus />
      </View>
      <View style={styles.navItem}>
        <Star />
        <Text>Daha Cüzdanı</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.white,
    width: '100%',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth:5,
    borderColor:colors.border,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    zIndex: 200,
    elevation: 1,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    zIndex: 1000,
  },
});

export default Nav;
