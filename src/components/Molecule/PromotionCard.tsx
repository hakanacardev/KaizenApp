import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../../assets/colors";
import { useNavigation } from "@react-navigation/native";
import { Promotion } from "../../interfaces";
import { Dimensions } from "react-native";

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = (props) => {
  const windowHeight = Dimensions.get("window").height;

  const regex = /(<([^>]+)>)/gi;
  const result = props.promotion.Title.replace(regex, "");

  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("PromotionDetail", { promotionId: props.promotion.Id });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 8,
          borderRadius: 42,
          borderWidth: 5,
          borderColor: colors.border,
          backgroundColor: colors.white,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: props.promotion.ImageUrl }}
          />
          <Image
            style={styles.brandIcon}
            source={{ uri: props.promotion.BrandIconUrl }}
          />
          <Text style={styles.remainingText}>
            {props.promotion.RemainingText}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{result}</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.button}>Daha Daha</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          {
            width: "100%",
            height: 100,
            backgroundColor: props?.promotion?.PromotionCardColor,
            borderRadius: 42,
            zIndex: -1,
          },
          {
            transform: [
              { rotateY: "3deg" },
              { rotateZ: "3deg" },
              { translateY: -80 },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 42,
  },
  imageContainer: {
    width: "100%",
    position: "relative",
  },
  productImage: {
    width: "100%",
    borderRadius: 32,
    borderBottomLeftRadius: 160,
    overflow: "hidden",
    aspectRatio: 4 / 3,
    resizeMode: "contain",
  },
  brandIcon: {
    width: 100,
    height: 100,
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
  textContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 20,
  },
  promotionBar: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 42,
    height: 100,
    zIndex: -1,
    transform: [{ rotateY: "3deg" }, { rotateZ: "3deg" }, { translateY: -80 }],
  },
});

export default PromotionCard;
