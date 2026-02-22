import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import TweetCard from "../../components/TweetCard";
import { tweets } from "../data/tweets";






export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>

      {/* Header */}
      <View style={{
        paddingTop: 50,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>X</Text>
      </View>

      {/* Tabs row */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#222"
      }}>
        <Text style={{
          color: "#fff",
          padding: 10,
          borderBottomWidth: 2,
          borderBottomColor: "#1DA1F2"
        }}>
          For you
        </Text>
        <Text style={{ color: "#888", padding: 10 }}>
          Following
        </Text>
      </View>

      {/* Feed */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TweetCard
            tweet={item}
            onPress={() =>
              router.push({
                pathname: "/tweet-detail",
                params: { text: item.text, user: item.user },
              })
            }
          />
        )}
      />

      {/* Floating button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 25,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#1DA1F2",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 28 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
