import React from "react";

import {
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking
} from "react-native";

import {
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Container } from "./scroll";

import { LoginModal } from "../components/modals/LoginModal";

import MapView from "react-native-maps";

import ImageA from "../../assets/images/CP.jpg";

import VT from "../../assets/images/VT.jpg";

// crasha expo web
// import {LocaleConfig} from 'react-native-calendars';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

// LocaleConfig.locales['br'] = {
//   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
//   monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
//   dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
//   dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.'],
//   today: 'Aujourd\'hui'
// };
// LocaleConfig.defaultLocale = 'br';

const RestauranteScreen = ({ route, navigation }) => {
  const [checar, setChecar] = React.useState(false);
  const [modal, setModal] = React.useState([]);

  const {
    id,
    image,
    quartos,
    camas,
    banheiros,
    ocupacao,
    name,
    rate,
    price,
    desc,
  } = route.params;

  const Header = () => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 25,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>{name}</Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View
        style={{
          maxWidth: 860,
          height: "100%",
          width: "100%",
          marginHorizontal: "auto",
        }}
      >
        <Header />
        <ScrollView style={{ padding: 20, height: "70%" }}>
          <Image
            source={ImageA}
            style={{
              height: "20%",
              width: "100%",
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{price}</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>Restaurante</Text>
            <Text>{" • "}</Text>
            <Text>{desc}</Text>
            <Text>{" • "}</Text>
            <Text style={{ textDecorationLine: "underline" }}>{rate}</Text>
          </View>
          <View style={{ marginTop: 10}}>
          <Text
              style={{
                color: "#000",
                marginVertical: 10,
                fontWeight: "bold",
              }}
            >
              Sobre o restaurante
            </Text>
            <Text
              style={{
                color: "#000",
              }}
            >
              Cozinha {desc}
            </Text>
          </View>
          <View style={{ marginTop: 10}}>
          <Text
              style={{
                color: "#000",
                marginVertical: 10,
                fontWeight: "bold",
              }}
            >
              Faixa de preço
            </Text>
            <Text
              style={{
                color: "#000",
              }}
            >
              R$ 13 - R$ 15
            </Text>
          </View>
          <View style={{ marginTop: 10}}>
          <Text
              style={{
                color: "#000",
                marginVertical: 10,
                fontWeight: "bold",
              }}
            >
              COVID-19
            </Text>
            <Text
              style={{
                color: "#000",
              }}
            >
              Máscara facial obrigatória para funcionários nas áreas comuns
            </Text>
          </View>
          <View
            style={{
              height: "auto",
              width: "100%",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#000",
                  marginTop: 20,
                  fontWeight: "bold",
                }}
              >
                Localização
              </Text>
              <MapView
                initialRegion={{
                  latitude: -16.5947925,
                  longitude: -39.1183782,
                  latitudeDelta: 1,
                  longitudeDelta: 3,
                }}
                style={{
                  height: 200,
                  width: "100%",
                  marginVertical: 20,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "#000", textDecorationLine: "underline" }}>
                Praça São João Batista, s/n , Trancoso, Brasil
              </Text>
            </View>
            <View style={{ height: 180 }} />
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('whatsapp://send?text=Olá, gostaria de saber mais sobre o restaurante&phone=5511989568298')
            }}
            style={{
              margin: "5%",
              width: "90%",
              height: 50,
              borderRadius: 5,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#000",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Entrar em contato
            </Text>
            <FontAwesome name="phone" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <LoginModal modal={modal} setModal={setModal} modalIndex={0} />
    </SafeAreaView>
  );
};

export default RestauranteScreen;
