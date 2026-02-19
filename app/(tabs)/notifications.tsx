import { Text, View } from "react-native";
 
export default function NotificationsScreen() {
  return (
    <View style={{
      flex:1,
      backgroundColor:"#000",
      paddingTop:60,
      paddingHorizontal:20
    }}>
 
      <Text style={{ color:"#fff", fontSize:22, fontWeight:"bold" }}>
        Notifications
      </Text>
 
      <View style={{
        flexDirection:"row",
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:"#222"
      }}>
        <Text style={{
          color:"#fff",
          marginRight:30,
          paddingBottom:10,
          borderBottomWidth:2,
          borderBottomColor:"#1DA1F2"
        }}>
          All
        </Text>
 
        <Text style={{ color:"#888" }}>
          Mentions
        </Text>
      </View>
 
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text style={{ color:"#fff", fontSize:20, fontWeight:"bold" }}>
          Be the first to know
        </Text>
 
        <Text style={{ color:"#888", textAlign:"center", marginTop:10 }}>
          Notifications about new posts, reposts, and more will show up here.
        </Text>
      </View>
 
    </View>
  );
}