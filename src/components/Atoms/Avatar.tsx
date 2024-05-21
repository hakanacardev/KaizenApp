import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../assets/colors';
import AvatarSvg from '../../assets/avatar.svg';

const Avatar: React.FC<any> = () => {
  return (
    <TouchableOpacity style={styles.avatar}>
      <AvatarSvg />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    backgroundColor: colors.black,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
