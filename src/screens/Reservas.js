import React from "react";

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import ImageA from "../../assets/images/CP.jpg";

const ReservasScreen = () => {
  const [reservas, setReservas] = React.useState([]);

  return (
    <SafeAreaView>
      <ScrollView style={{ height: `100%`, paddingTop: 10}}>
        {reservas.length > 0 ? (
          <>
            {reservas.map((reserva, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    width: "90%",
                    height: "auto",
                    margin: "5%",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    source={ImageA}
                    style={{
                      width: "100%",
                      height: 150,
                    }}
                  />
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        textAlign: "center",
                        color: "#333",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      Hospedagem em Trancoso, BA
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        textAlign: "center",
                        color: "#333",
                        fontSize: 20,
                        marginVertical: 10,
                        fontWeight: "bold",
                      }}
                    >
                      Vila Tupi
                    </Text>
                    <View
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 5 ,
                        height: 35,
                        padding: 5,
                        backgroundColor: "green",
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Reserva emitida</Text>
                    </View>
                    <View
                      style={{
                          width: '100%',
                          borderBottomColor: '#ccc',
                          borderBottomWidth: 1,
                          justifyContent: 'space-between',
                          paddingVertical: 10,
                          marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10}}>
                      <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }}>data da entrada</Text>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: `#333` }}>28 jun 21</Text>
                      </View>
                      <View style={{ marginRight: 10}}>
                      <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }}>data de saida</Text>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: `#333` }}>09 jul 21</Text>
                      </View>
                    </View>
                    <View
                      style={{
                          width: '100%',
                          borderBottomColor: '#ccc',
                          borderBottomWidth: 1,
                          justifyContent: 'space-between',
                          paddingVertical: 10,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10}}>
                      <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }}>forma de pagamento</Text>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: `#333` }}>1x no Boleto</Text>
                      </View>
                    </View>
                    <View
                      style={{
                          width: '100%',
                          justifyContent: 'space-between',
                          paddingVertical: 10,
                          marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginRight: 10}}>
                      <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }}>total pago</Text>
                      <Text style={{ fontSize: 16, color: `#333` }}>R$ <Text style={{ fontSize: 22, fontWeight: 'bold'}}>1.039,80</Text> </Text>
                      </View>
                      <View style={{ marginRight: 10}}>
                      <Text style={{ fontSize: 12, color: '#777', fontWeight: 'bold' }}>data do pagamento</Text>
                      <Text style={{ fontSize: 22, fontWeight: 'bold'}}>22 jun 21</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </>
        ) : (
          <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
            marginTop: 120,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              width: "60%",
            }}
          >
            Nenhuma reserva feita recentemente
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginHorizontal: "5%",
            }}
          >
            Suas últimas reservas aparecerão aqui
          </Text>
        </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReservasScreen;
