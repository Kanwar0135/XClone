import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TweetDetailScreen() {
  const { text, user } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 20 }}>
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
        {user}
      </Text>

      <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
        {text}
      </Text>
    </View>
  );
}
