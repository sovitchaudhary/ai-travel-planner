import { Text, View } from "react-native";
import Login from './../components/Login'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>AI Travel Planner</Text> */}
    
      <Login />
    </View>
  );
}