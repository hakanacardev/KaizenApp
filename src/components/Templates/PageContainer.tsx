import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../../assets/colors";

export interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
});

export default PageContainer;
