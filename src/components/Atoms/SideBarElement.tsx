import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors';
interface SideBarElementProps {
  logo: string;
  title: string;
}

const SideBarElement: React.FC<SideBarElementProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: props.logo }} />
      <Text style={styles.text}> {props.title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    width: 150,
    height: 50,
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.white,
    marginRight: 5,
  },
  image: {
    width: '20%',
    resizeMode: 'contain',
    height: '50%',
  },
  text: {
    marginLeft: 4,
  },
});

export default SideBarElement;
