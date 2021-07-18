import React from "react";

import {
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";

import {
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { FlatListSlider } from 'react-native-flatlist-slider';

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

const HouseScreen = ({ route, navigation }) => {
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

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const images = [
    {
      image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },]

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
          <FlatListSlider
            data={images}
            width={windowWidth - 40}
          />
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
              {rate}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text>{ocupacao} pessoas</Text>
            <Text>{" • "}</Text>
            <Text>{quartos} quartos</Text>
            <Text>{" • "}</Text>
            <Text>{camas} camas</Text>
            <Text>{" • "}</Text>
            <Text>{banheiros} banheiros</Text>
          </View>
          <View>
            <Text
              style={{
                color: "#000",
                marginVertical: 20,
                fontWeight: "bold",
              }}
            >
              Sobre a casa
            </Text>
            <Text
              style={{
                color: "#000",
              }}
            >
              A 10 min da praia e do Quadrado, o sitio oferece sossego e
              segurança. A casa tem espaços amplos e agradáveis, que fazem você
              não querer sair. Linda área externa com piscina e decoração que
              traduzem a simplicidade baiana. Disponibilizamos 1 arrumadeira
              para a manutenção da limpeza da casa. A vila é tem 2 pisos no
              superior tem três suítes, sendo uma master com banheira,
              ar-condicionado, TV, wi-fi, cama queen Duas suítes com TV,
              ar-condicionado, wi-fi e camas queen. Todas as suítes possuem
              saídas para a varanda superior, onde pode relaxar com o ar fresco
              do sítio.
            </Text>
          </View>
          <View
            style={{
              height: "auto",
              width: "100%",
            }}
          >
            {/* Adicionar imagens ao lugar de icones */}
            <Text
              style={{ color: "#000", marginVertical: 20, fontWeight: "bold" }}
            >
              Comodos disponiveis
            </Text>
            <Container>
              <View
                style={{
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="bed" size={50} color="#000" />
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                >
                  Quarto 1
                </Text>
                <Text style={{ fontSize: 14, color: "#000" }}>
                  1 cama de casal
                </Text>
              </View>
              <View
                style={{
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="bed" size={50} color="#000" />
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                >
                  Quarto 2
                </Text>
                <Text style={{ fontSize: 14, color: "#000" }}>
                  1 cama de casal
                </Text>
              </View>
              <View
                style={{
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="bed" size={50} color="#000" />
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                >
                  Quarto 3
                </Text>
                <Text style={{ fontSize: 14, color: "#000" }}>
                  1 cama de casal
                </Text>
              </View>
            </Container>
            <View>
              <Text
                style={{
                  color: "#000",
                  marginVertical: 20,
                  fontWeight: "bold",
                }}
              >
                Regras da Casa
              </Text>
              <Container>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="pets" size={50} color="black" />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Pets
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Pets são bem vindos
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="chef-hat"
                    size={50}
                    color="black"
                  />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Governanta
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Você terá uma governanta
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="smoke-free" size={50} color="black" />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Proíbido fumar
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Dentro da propriedade
                  </Text>
                </View>
              </Container>
            </View>
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
                }}
              />
              <Text style={{ color: "#000", textDecorationLine: "underline" }}>
                Praça São João Batista, s/n , Trancoso, Brasil
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#000",
                  marginVertical: 20,
                  fontWeight: "bold",
                }}
              >
                Serviços
              </Text>
              <Container>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="check" size={25} color="black" />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Cozinha
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Utensílhos de cozinha
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="check" size={25} color="black" />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Lavanderia
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Items de lavanderia
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="check" size={25} color="black" />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}
                  >
                    Estacionamento
                  </Text>
                  <Text style={{ fontSize: 14, color: "#000" }}>
                    Estacionamento incluído
                  </Text>
                </View>
              </Container>
            </View>
            <View style={{ height: 40 }} />
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "#fff", borderTopWidth: 1, borderColor: '#eee' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Pessoas', {
                idUser: '0',
                idHouse: '1'
              })
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
              R${price}/dia
            </Text>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Checar disponibilidade
            </Text>
            <FontAwesome name="arrow-right" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <LoginModal modal={modal} setModal={setModal} modalIndex={0} />
    </SafeAreaView>
  );
};

export default HouseScreen;
