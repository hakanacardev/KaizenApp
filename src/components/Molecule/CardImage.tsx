import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import colors from "../../assets/colors";
import { Promotion } from "../../interfaces";

interface CardImageProps {
  promotion: Promotion;
}

const CardImage: React.FC<CardImageProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{ uri: props.promotion.ImageUrl }}
      />
      <Image
        style={styles.brandIcon}
        source={{ uri: props.promotion.BrandIconUrl }}
      />
      <Text style={styles.remainingText}>{props.promotion.RemainingText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  productImage: {
    width: "100%",
    borderRadius: 32,
    borderBottomLeftRadius: 160,
    overflow: "hidden",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  brandIcon: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: colors.white,
    position: "absolute",
    bottom: -32,
  },
  remainingText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    backgroundColor: colors.black,
    borderRadius: 22,
    color: colors.white,
  },
});

export default CardImage;
