import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";

import tw from "twrnc";
import Toast from "react-native-toast-message";
import axios from "axios";

const Adhaar = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (text) => {
    setInput(text);
  };

  const fetchData = async (input) => {
    if (input.trim() === "" || input.length < 12) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please recheck your adhaar number 😢",
        autoHide: true,
        visibilityTime: 4000,
        position:'bottom',
        bottomOffset:250
      });
      setResult("Invalid Aadhaar Number");
      return;
    }

    const options = {
      method: "POST",
      url: "https://api.apyhub.com/validate/aadhaar",
      headers: {
        "apy-token":
          "APY0ZKwhdYXKCAZabBup4HDG1hqHrYohrGRdG5AEiB4CrBI4h5NknHXg333lbXATa6hWIV",
        "Content-Type": "application/json",
      },
      data: { aadhaar: input },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setResult(response.data.data);
      if (response.data.data === true) {
        Toast.show({
          type: "success",
          text1: input,
          text2: "Adhaar is verified 🫡",
          autoHide: true,
          visibilityTime: 4000,
          position:'bottom',
          bottomOffset:250
        });
      } else if (response.data.data === false) {
        Toast.show({
          type: "error",
          text1: input,
          text2: "Aadhaar doesn't exist 😢",
          autoHide: true,
          visibilityTime: 4000,
          topOffset:400
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: input,
        text2: "An error occured while verifying Adhaar 😢",
        autoHide: true,
        visibilityTime: 4000,
        position:'bottom',
        bottomOffset:250
      });
      setResult("Invalid Aadhaar Number");
    }
  };

  const submitHandler = () => {
    fetchData(input);
    setInput("");
  };

  return (
    <View style={tw`mt-20 flex flex-col justify-center items-center`}>
      <Text style={tw`text-3xl text-yellow-500 font-extrabold`}>
        Verify your Adhaar
      </Text>
      <TextInput
        style={tw`bg-[#202123] rounded-3xl text-white text-xl px-4 py-4 w-10/12 md:w-11/12 my-8`}
        placeholder="enter adhaar number"
        onChangeText={changeHandler}
        value={input}
      />
      <TouchableOpacity onPress={submitHandler}>
        <View style={tw`bg-yellow-500 px-5 py-4 rounded-xl text-white`}>
          <Text style={tw`text-xl font-semibold text-white`}>Verify</Text>
        </View>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};

export default Adhaar;
