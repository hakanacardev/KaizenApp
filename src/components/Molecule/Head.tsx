import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginButton from '../Atoms/LoginButton';
import Avatar from '../Atoms/Avatar';
import Logo from '../../assets/logo.svg';

const Head: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.actionsContainer}>
        <LoginButton />
        <Avatar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: 40,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Head;
