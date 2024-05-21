import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';

const LoginButton: React.FC<any> = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('basıldı')}
      style={styles.button}>
      <Text style={styles.buttonText}>
        Giriş Yap
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.red,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
});

export default LoginButton;
