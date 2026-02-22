import { Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={{ flex:1, backgroundColor:"#000", paddingTop:60, paddingHorizontal:20 }}>

      <Text style={{ color:"#fff", fontSize:22, fontWeight:"bold" }}>
        Explore
      </Text>

      <Text style={{ color:"#888", marginTop:15 }}>
        Trending Topics
      </Text>

      <View style={{ marginTop:20 }}>
        <Text style={{ color:"#fff", marginBottom:10 }}>#ReactNative</Text>
        <Text style={{ color:"#fff", marginBottom:10 }}>#Expo</Text>
        <Text style={{ color:"#fff", marginBottom:10 }}>#MobileApps</Text>
        <Text style={{ color:"#fff", marginBottom:10 }}>#UIUX</Text>
      </View>

    </View>
  );
}