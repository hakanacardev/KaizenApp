import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import PageContainer from "../components/Templates/PageContainer";
import SideBar from "../components/Molecule/SideBar";
import Nav from "../components/Molecule/Nav";
import axios from "axios";
import { Promotion } from "../interfaces";
import PromotionCard from "../components/Molecule/PromotionCard";
import Head from "../components/Molecule/Head";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import colors from "../assets/colors";

const Promotions: React.FC<any> = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const ref = React.useRef<ICarouselInstance>(null);

  const [data, setData] = useState<Promotion[]>([]);

  useEffect(() => {
    const getPromotions = async () => {
      const response = await axios.get<Promotion[]>(
        "/promotions/list?Channel=PWA"
      );
      setData(response.data);
    };
    getPromotions();
  }, []);

  return (
    <PageContainer>
      <Head />
      <SideBar />
      <View style={styles.productContainer}>
        {/* {data.length > 0 && <PromotionCard promotion={data[1]} />} */}
        <Carousel
          ref={ref}
          width={width }
          height={height}
          loop

          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={true}
          autoPlayInterval={2000}
          //onProgressChange={progress}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 100,
          }}
          data={data}
          renderItem={({ item }) => <PromotionCard promotion={item} />}
        />
      </View>
      <Nav />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex:1,
    alignSelf: "center",

  },
});

export default Promotions;
