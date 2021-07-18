import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const feed = [
  {
    id: "0",
    image: "https://l.icdbcdn.com/oh/265dc6de-2fc9-4b3f-95db-37c70675c707.jpg?w=300",
    type: "Casa Privada",
    title: "Vila Tupi Trancoso café da manha e limpeza diária",
    bed: 3,
    bedroom: 3,
    oldPrice: 1390,
    newPrice: 840,
    totalPrice: 1000,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: "1",
    image: "https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=300",
    type: "Casa Privada",
    title: "Sitio Casa Rio Verde Trancoso Home office & nature",
    bed: 3,
    bedroom: 3,
    oldPrice: 790,
    newPrice: 590,
    totalPrice: 700,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: "2",
    image: "https://l.icdbcdn.com/oh/7ace2f1f-4978-4001-8965-0d4d9dbf6c32.jpg?w=300",
    type: "Casa Privada",
    title: "Casa Biriri Trancoso",
    bed: 5,
    bedroom: 4,
    oldPrice: 1290,
    newPrice: 910,
    totalPrice: 1100,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: "3",
    image: "https://l.icdbcdn.com/oh/8f653cc8-b65d-4066-9e96-4bc9cfeb1fd5.jpg?w=300",
    type: "Casa Privada",
    title: "Casa Penelope Trancoso",
    bed: 6,
    bedroom: 4,
    oldPrice: 120,
    newPrice: 100,
    totalPrice: 600,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
];

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

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
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          4 casas encontradas
        </Text>
      </View>
    </>
  );
};

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.desciption} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

const SearchResultsScreen = () => {
  return (
      <View style={{ height: '100%', width: '100%', paddingTop: 20 }}>
        <Header />
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
