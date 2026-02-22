import { Image, Text, TouchableOpacity, View } from "react-native";

type Tweet = {
  id: string;
  user: string;
  handle: string;
  time: string;
  text: string;
  image?: string;
};

export default function TweetCard({
  tweet,
  onPress,
}: {
  tweet: Tweet;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#444",
            marginRight: 10,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {tweet.user}{" "}
            <Text style={{ color: "#888", fontWeight: "normal" }}>
              {tweet.handle} · {tweet.time}
            </Text>
          </Text>

          <Text style={{ color: "#fff", marginTop: 4 }}>
            {tweet.text}
          </Text>

          {tweet.image && (
            <Image
              source={{ uri: tweet.image }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10,
                marginTop: 8,
              }}
            />
          )}

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
              paddingRight: 40,
            }}
          >
            <Text style={{ color: "#888" }}>💬</Text>
            <Text style={{ color: "#888" }}>🔁</Text>
            <Text style={{ color: "#888" }}>❤️</Text>
            <Text style={{ color: "#888" }}>📊</Text>
            <Text style={{ color: "#888" }}>🔖</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
