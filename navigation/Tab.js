import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text, useColorScheme } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
// import Coins from "../screen/Coins";
// import Prices from "../screen/Prices";
// import News from "../screen/News";

const Coins = () => {
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
            <Text style={{color:"grey"}}>
                Coins
            </Text>
        </View>
    )
}

const Prices = () => {
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
            <Text style={{color:"grey"}}>
                 Prices
            </Text>
        </View>
    )
}

const News = () => {
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
            <Text style={{color:"grey"}}>
                News
            </Text>
        </View>
    )
}

export default function Tab() {
  const Tab = createBottomTabNavigator();
  //const isTheme = useColorScheme() === "dark";
  // console.log(isTheme);
  const darkstyle = {
    tabBarActiveTintColor: "#e91e63",
    headerTitleAlign: "center",
    headerTitleStyle:{
        color:"#e91e63",
    }, 
    headerStyle:{
        backgroundColor: "black",
    },
    tabBarStyle:{
        backgroundColor: "black",
        paddingTop: 5,
    }
  }

  return (
    <Tab.Navigator
      screenOptions={darkstyle}
    >
      <Tab.Screen
        name="Coins"
        component={Coins}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="coins" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Prices}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dollar-sign" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
