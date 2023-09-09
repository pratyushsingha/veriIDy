import React, { Component } from "react";
import { Text, View , StyleSheet} from "react-native";
import tw from "twrnc";

const Navbar = () => {
  return (
    <>
      <View style={tw`bg-gray-900 px-5 pt-8 flex justify-start items-start`}>
        <Text style={tw`text-white text-2xl font-semibold`}>veriIDy</Text>
      </View>
      <View style={styles.hr} />
    </>
  );
};

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10, 
  },
});

export default Navbar;
