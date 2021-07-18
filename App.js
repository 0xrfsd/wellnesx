// In App.js in a new project
import * as React from "react";

// React-native && Expo HOCs
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

// Icons
import { Fontisto, FontAwesome5, Ionicons } from "@expo/vector-icons";

// React-navigation HOCs
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

// Auth Context
import { AuthContext } from "./Context";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

// meta no csgoempire 236 coins

// Screens
// tela de perfil
// tela de ordem (onboarding navigation)
// tela de restaurante
// tela de passeio
// modal de add casa
// modal de add restaurante
// modal de add passeio
// identificador se role == host or staff if(staff) relatios e modais de add, if host mostra propriedades e edita-las

import SearchResultsScreen from "./src/screens/ResultScreen";
import GuestsScreen from "./src/screens/Pessoas";
import SettingScreen from "./src/screens/Setting";
import HomeScreen from "./src/screens/Home2";
import ProfileScreen from "./src/screens/Profile";
import HouseScreen from "./src/screens/House";
import ReveillonScreen from "./src/screens/Reveillon";
import IntroScreen from "./src/screens/Intro";
import ReservasScreen from "./src/screens/Reservas";
import RestauranteScreen from "./src/screens/Restaurante";

function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function CovidScreen() {
  return (
    <>
      <Text>Covid Screen</Text>
    </>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const NestedStack = createStackNavigator();

function Inicio() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },

        style: {
          height: 60,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Explorar"
        component={HomeScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reservas"
        component={ReservasScreen}
        options={{
          title: "Reservas",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: "Entrar",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [userData, setUserData] = React.useState({});
  const [userNome, setUserNome] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userTipo, setUserTipo] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  const [isAuth, setIsAuth] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getToken();
    getData();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");

      if (value !== null) {
        setIsAuth(true);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getData = async () => {
    try {
      await AsyncStorage.getItem("@token").then((valueData) => {
        var t = valueData.split('"').join("");

        var d = jwt_decode(t);
        setUserData(d);

        var n = d.nome.split('"').join("");
        setUserNome(n);

        var e = d.email.split('"').join("");
        setUserEmail(e);

        var t = d.tipo.split('"').join("");
        setUserTipo(t);
      });
    } catch (e) {
      // error reading value
    }
  };

  const Loading = () => {
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#333",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Entrega +</Text>
      </View>
    );
  };

  const IntroStack = () => {
    return (
      <NestedStack.Navigator>
        <NestedStack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
      </NestedStack.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
          <Stack.Navigator>
            {isAuth ? (
              <>
                <Stack.Screen
                  name="Inicio"
                  component={Inicio}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="COVID-19" component={CovidScreen} />
                <Stack.Screen
                  name="House"
                  component={HouseScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Reveillon" component={ReveillonScreen} />
                <Stack.Screen
                  name="Restaurante"
                  component={RestauranteScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="SearchResults" component={SearchResultsScreen}
                  options={{ headerShown: false }}
                  />
                <Stack.Screen name="Pessoas" component={GuestsScreen}
                  options={{ headerShown: false }}
                  />
                <Stack.Screen name="Setting" component={SettingScreen} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Intro"
                  component={IntroStack}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </>
  );
}

export default App;
