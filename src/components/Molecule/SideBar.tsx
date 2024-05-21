import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SideBarElement from "../Atoms/SideBarElement";
import { Tag } from "../../interfaces";
import axios from "axios";

const SideBar: React.FC<any> = () => {
  const [data, setData] = useState<Tag[]>([]);

  useEffect(() => {
    const getTags = async () => {
      const response = await axios.get<Tag[]>("/tags/list");
      setData(response.data);
    };
    getTags();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {data.length > 0 &&
          data.map((v, index) => {
            return (
              <SideBarElement key={index} logo={v?.IconUrl} title={v?.Name} />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  scrollView: {
    width: "auto",
    marginLeft: 16,
  },
  contentContainerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default SideBar;
