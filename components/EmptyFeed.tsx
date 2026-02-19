import { Text, TouchableOpacity, View } from "react-native";
 
export default function EmptyFeed({ onExplore }: { onExplore?: () => void }) {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      padding:30
    }}>
     
      {/* Illustration substitute */}
      <View style={{
        width:120,
        height:120,
        borderRadius:60,
        backgroundColor:"#1DA1F2",
        opacity:0.15,
        marginBottom:20
      }}/>
 
      <Text style={{ color:"#fff", fontSize:22, fontWeight:"bold", textAlign:"center" }}>
        Welcome to X
      </Text>
 
      <Text style={{
        color:"#888",
        marginTop:10,
        textAlign:"center",
        lineHeight:20
      }}>
        This is the best place to see what is happening.
        Follow people and topics to start seeing posts.
      </Text>
 
      <TouchableOpacity
        onPress={onExplore}
        style={{
          backgroundColor:"#1DA1F2",
          paddingHorizontal:20,
          paddingVertical:10,
          borderRadius:20,
          marginTop:20
        }}
      >
        <Text style={{ color:"#fff", fontWeight:"bold" }}>
          Find people to follow
        </Text>
      </TouchableOpacity>
 
    </View>
  );
}
 