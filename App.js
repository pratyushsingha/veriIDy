import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";
import Navbar from "./src/screens/Navbar";
import Adhaar from "./src/screens/Adhaar";

const App = () => {
  return (
    <View style={tw`flex-1 bg-gray-900`}>
      <Navbar />
      <Adhaar/>
    </View>
  );
};
export default App;
