import { Text, View } from "react-native";
 
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
 
      {/* Banner */}
      <View style={{ height: 120, backgroundColor: "#1DA1F2" }} />
 
      {/* Avatar */}
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#444",
        marginTop: -40,
        marginLeft: 20,
        borderWidth: 3,
        borderColor: "#000"
      }} />
 
      {/* Name */}
      <Text style={{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10
      }}>
        Your Name
      </Text>
 
      <Text style={{ color: "#888", marginLeft: 20 }}>
        @username
      </Text>
 
      <Text style={{ color: "#888", marginLeft: 20, marginTop: 5 }}>
        Joined February 2026
      </Text>
 
      <Text style={{ color: "#fff", marginLeft: 20, marginTop: 10 }}>
        15 Following · 0 Followers
      </Text>
 
    </View>
  );
}
 