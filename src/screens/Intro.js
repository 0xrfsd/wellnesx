import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Fontisto,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { LoginModal } from "../components/modals/LoginModal";
import { RegisterModal } from "../components/modals/RegisterModal";

const IntroScreen = ({ navigation }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [modal, setModal] = React.useState([]);
  const [loginOpened, setLoginOpened] = React.useState(false);

  const storeIntroShow = async (value) => {
    const json = JSON.stringify(value);
    try {
      await AsyncStorage.setItem("@introShow", json).then(() => {
        console.log("Intro visualized");
      });
    } catch (e) {
      // saving error
    }
  };

  const getIntroShow = async () => {
    try {
      await AsyncStorage.getItem("@introShow").then((value) => {
        if (value === "true") {
          setShowIntro(true);
        }
        if (value === "false") {
          setShowIntro(false);
        }
      });
    } catch (e) {
      // error reading value
    }
  };

  React.useEffect(() => {
    getIntroShow();
  }, []);

  const onSkip = () => {
    storeIntroShow(false);
    setShowIntro(false);
  };

  _renderNextButton = () => {
    return (
      <View
        style={{
          width: "95%",
          marginHorizontal: "auto",
          backgroundColor: "#000",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 5,
          height: 50,
          padding: 15,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Proximo</Text>
        <FontAwesome name="arrow-right" size={16} color="#fff" />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          storeIntroShow(false);
          setShowIntro(false);
        }}
        style={{
          width: "95%",
          marginHorizontal: "auto",
          backgroundColor: "#000",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 5,
          height: 50,
          padding: 15,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Pronto você agora pode se registrar</Text>
        <FontAwesome name="check" size={16} color="#fff" />
      </TouchableOpacity>
    );
  };

  const RenderItem = ({ item }) => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
      <ImageBackground
        opacity={0.5}
        source={item.image}
        style={{
          width: windowWidth,
          flex: 1,
          backgroundColor: "#333",
          padding: 20,
          paddingBottom: "15%",
          display: "flex",
        }}
      >
        <Text
          style={{
            color: "#fff",
            display: "flex",
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
            fontSize: 32,
          }}
        >
          Wellness
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: "#fff",
            marginTop: "100%",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            textAlign: "left",
            marginBottom: "20%",
          }}
        >
          {item.text}
        </Text>
      </ImageBackground>
    );
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <>
      {showIntro ? (
        <AppIntroSlider
          activeDotStyle={{ width: 30, backgroundColor: "#fff" }}
          data={slides}
          renderItem={RenderItem}
          showDoneButton={true}
          showSkipButton={false}
          showNextButton={true}
          onSkip={onSkip}
          bottomButton={true}
          renderNextButton={_renderNextButton}
          renderDoneButton={_renderDoneButton}
        />
      ) : (
        <ImageBackground
          opacity={0.5}
          source={{
            uri: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/02/Trancoso-Porto-Seguro-Bahia-O-que-Fazer-5.jpg",
          }}
          style={{
            width: windowWidth,
            flex: 1,
            backgroundColor: "#333",
            padding: 20,
            paddingBottom: "15%",
            display: "flex",
          }}
        >
          <Text
            style={{
              color: "#fff",
              display: "flex",
              marginTop: "5%",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 10,
              fontSize: 32,
            }}
          >
            Wellness
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "65%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                display: "flex",
                marginBottom: 10,
                fontSize: 26,
                fontWeight: 'bold'
              }}
            >
            Trancoso agora recebe um novo conceito de turismo e hospedagem.
            </Text>
            <Text
              style={{
                color: "#fff",
                display: "flex",
                marginBottom: 20,
                fontSize: 14,
              }}
            >
              Você precisa se autenticar primeiro
            </Text>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => {
                modal[1].openModal();
              }}
            >
              <Text style={{ color: "#333" }}>
                Ainda não possui uma conta?{" "}
                <Text style={{ fontWeight: "bold" }}>Crie agora!</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                marginTop: 5,
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => {
                modal[0].openModal();
              }}
            >
              <Text style={{ color: "#333" }}>
                Já possui uma conta?{" "}
                <Text style={{ fontWeight: "bold" }}>Entre agora!</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                marginTop: 5,
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
              onPress={() => {
                storeIntroShow(true);
                setShowIntro(true);
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#333" }}>
                {" "}
                Mostrar introdução de Download
              </Text>
            </TouchableOpacity>
          </View>
          <LoginModal modal={modal} setModal={setModal} modalIndex={0} />
          <RegisterModal modal={modal} setModal={setModal} modalIndex={1} />
        </ImageBackground>
      )}
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    marginTop: "auto",
    display: "flex",
    width: "50%",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    marginTop: "auto",
    width: "40%",
    fontSize: 35,
    color: "white",
    textAlign: "left",
    fontWeight: "bold",
  },
  buttonCircle: {
    width: "100%",
    marginTop: 10,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, .9)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    key: "s1",
    title: "Wellness agora em Trancoso",
    text: "Trancoso agora recebe um novo conceito de hospedagem.",
    // text: "Hospede-se em uma de nossas incríveis propriedades.",
    image: {
      uri: "https://guiaviajarmelhor.com.br/wp-content/uploads/2021/06/fotos-trancoso.jpg",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s2",
    title: "Encontre o lugar perfeito para você ficar",
    // text: "Confira quais propriedades ainda estão disponíveis.",
    text: "Hospede-se em uma de nossas incríveis propriedades.",
    image: {
      uri: "https://guiaviajarmelhor.com.br/wp-content/uploads/2021/06/fotos-trancoso.jpg",
      uri: "https://images.pexels.com/photos/6306321/pexels-photo-6306321.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    backgroundColor: "#22bcb5",
  },
  {
    key: "s3",
    title: "Faça sua reserva em um minuto",
    text: "Pelo nosso app você reserva suas reservas em um minuto.",
    image: {
      uri: "https://www.coconutexperience.com.br/wp-content/uploads/2017/12/quadrado.jpg",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s4",
    title: "Restaurantes e Passeios em Trancoso",
    text: "Confira nossa seleção de Restaurantes e Passeios.",
    image: {
      uri: "https://viagenseoutrashistorias.com.br/wp-content/uploads/2015/08/Trancoso-anoitecer-730x410.jpg",
    },
    backgroundColor: "#3395ff",
  },
];
