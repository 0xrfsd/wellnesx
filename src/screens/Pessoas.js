import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import {
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const GuestsScreen = ({ route }) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 20,
      marginHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: "lightgrey",
    },
    button: {
      borderWidth: 1,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#777777",
    },
  });

  const { idUser, idHouse } = route.params;

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  const Header = () => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Quantas pessoas?</Text>

        </View>
      </>
    );
  };

  return (
    <View style={{ height: "100%", paddingTop: 20 }}>
        <Header />
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Adults</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>-</Text>
          </Pressable>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Children</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 2 - 12</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>-</Text>
          </Pressable>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Infants</Text>
          <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>-</Text>
          </Pressable>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}
          >
            <Text style={{ color: "#474747", fontSize: 20 }}>+</Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchResults", {
            idUser: "0",
            idHouse: "1",
          });
        }}
        style={{
          margin: "5%",
          width: "90%",
          height: 50,
          marginTop: "auto",
          borderRadius: 5,
          paddingHorizontal: 20,
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        {adults ? (
          <Text style={{ color: "#fff", fontSize: 12 }}>
            {adults} adultos {children ? "..." : null}
          </Text>
        ) : null}
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Checar disponibilidade
        </Text>
        <FontAwesome name="arrow-right" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default GuestsScreen;
