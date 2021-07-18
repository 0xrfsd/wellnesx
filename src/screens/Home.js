import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import {
  Fontisto,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Container } from "./scroll";

import Casa from "../../assets/images/casa.jpg";

import Quadrado from "../../assets/images/quadrado.jpg";
import PE from "../../assets/images/praiadoespelho.jpg";
import PC from "../../assets/images/praiadoscoqueiros.jpg";
import PR from "../../assets/images/praia-do-rio-da-barra.jpg";
import PN from "../../assets/images/nativos-beach-trancoso.jpg";
import SJ from "../../assets/images/sj.jpg";
import OC from "../../assets/images/oc.jpg";
import TG from "../../assets/images/golf.jpg";
import LC from "../../assets/images/LC.jpg";
import HSJ from "../../assets/images/HSJ.jpg";
import SB from "../../assets/images/SB.jpg";
import UV from "../../assets/images/UV.jpg";
import RR from "../../assets/images/RR.jpg";
import CS from "../../assets/images/CS.jpg";
import CP from "../../assets/images/CP.jpg";
import VT from "../../assets/images/VT.jpg";
import RV from "../../assets/images/RV.jpeg";
import CB from "../../assets/images/CB.jpeg";
import IE from "../../assets/images/IE.jpeg";
import CM from "../../assets/images/CM.jpeg";
import CC from "../../assets/images/CC.jpeg";
import CU from "../../assets/images/CU.jpeg";
import CMT from "../../assets/images/CMT.jpeg";
import DG from "../../assets/images/DG.jpeg";
import MR from "../../assets/images/MR.jpeg";
import CH from "../../assets/images/CH.jpeg";
import TC from "../../assets/images/TC.jpeg";
import CCA from "../../assets/images/CCA.jpeg";
import CA from "../../assets/images/CA.jpeg";
import CMM from "../../assets/images/CMM.jpeg";
import ImageSection from "../../assets/images/casa.jpg";


const styles = StyleSheet.create({
  image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
    marginTop: -15,
  },
  button: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 25,
    right: 25,
    zIndex: 100,
    borderRadius: 50,
  },
  searchButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

const Praias = [
  {
    img: PR,
    key: String(Math.random()),
    name: "Praia do Rio da Barra",
    rate: "2 avaliações",
    price: 0,
    desc: "Praias",
  },
  {
    img: PE,
    key: String(Math.random()),
    name: "Praia do Espelho",
    rate: "4 avaliações",
    price: 256,
    desc: "Praias",
  },
  {
    img: PC,
    key: String(Math.random()),
    name: "Praia dos Coqueiros",
    rate: "6 avaliações",
    price: 256,
    desc: "Praias",
  },
  {
    img: PN,
    key: String(Math.random()),
    name: "Praia dos Nativos",
    rate: "5 avaliações",
    price: 256,
    desc: "Praias",
  },
];

const Passeios = [
  {
    img: Quadrado,
    key: String(Math.random()),
    name: "Quadrado",
    rate: "6 avaliações",
    price: 0,
    desc: "Áreas históricas para caminhadas.",
  },
  {
    img: SJ,
    key: String(Math.random()),
    name: "Igreja de São João Batista",
    rate: "3 avaliações",
    price: 256,
    desc: "Igrejas e catedrais",
  },
  {
    img: TG,
    key: String(Math.random()),
    name: "Terravista Gold",
    rate: "3 avaliações",
    price: 256,
    desc: "Campos de golfe",
  },
  {
    img: OC,
    key: String(Math.random()),
    name: "O Centro Music Bar",
    rate: "2 avaliações",
    price: 256,
    desc: "Bares e clubes",
  },
];

const houses = [
  {
    img: VT,
    key: String(Math.random()),
    name: "Vila Tupi",
    rate: "6 avaliações",
    price: 840,
    ocupacao: 6,
    quartos: 3,
    banheiros: 2,
    camas: 3,
    destaques: ['Animais de estimação são bem-vindos', 'Estacionamento', 'Wi-Fi Internet'],
    servicos: [
      {
        'title': 'Cozinha',
        'desc': 'Utensílhos de cozinha'
      },
      {
        'title': 'Lavanderia',
        'desc': 'Ferro e tábua de passar e Máquina de lavar roupa'
      },
      {
        'title': 'Sanitário',
        'desc': 'Itens essenciais, Toalhas e Hidromassagem'
      },
      {
        'title': 'Estacionamento',
        'desc': 'Estacionamento Incluído'
      },
      {
        'title': 'Entretenmento',
        'desc': 'Wi-Fi Internet e TV (cabo)'
      },
      {
        'title': 'Dormitórios',
        'desc': '3 Cama queen size'
      },
      {
        'title': 'Habitações',
        'desc': '3 Quarto'
      },
      {
        'title': 'Diversos',
        'desc': 'Conjunto de primeiros socorros'
      },
      {
        'title': 'Mais informações',
        'desc': 'Governanta incluída e Animais de estimação bem-vindos'
      },
    ],
    regras: [
      {
        'title': 'Governanta incluída'
      },
      {
        'title': 'Animais de estimação bem-vindos'
      },
      {
        'title': 'Check in: 03:00 PM'
      },
      {
        'title': 'Check out: 11:00 AM'
      },
    ],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    Politica: [
      {
        'title': 'Cronograma de pagamento',
        'desc': [
          '100% due at time of booking',
          'VaLor restante: A vencer posteriormente'
        ]
      },
      {
        'title': 'Política de cancelamento',
        'desc': [
          '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
          '0% reembolsáve, caso seja cancelado depois.'
        ]
      },
      {
        'title': 'Depósito de fiança',
        'desc': 'Não há depósito de fiança a vencer'
      }
    ],
    location: 'Praça São João Batista, s/n, Trancoso, Brasil',
    desc: "A 10 min da praia e do Quadrado, o sitio oferece sossego e segurança. A casa tem espaços amplos e agradáveis, que fazem você não querer sair. Linda área externa com piscina e decoração que traduzem a simplicidade baiana. Disponibilizamos 1 arrumadeira para a manutenção da limpeza da casa. A vila é tem 2 pisos no superior tem três suítes, sendo uma master com banheira, ar-condicionado, TV, wi-fi, cama queen Duas suítes com TV, ar-condicionado, wi-fi e camas queen. Todas as suítes possuem saídas para a varanda superior, onde pode relaxar com o ar fresco do sítio. Na parte inferior, uma sala de estar com tv, wi-fi e ar condicionado, com janelas amplas onde pode desfrutar do ar puro da natureza. Temos ainda uma sala de jantar compartilhada com a cozinha. Temo uma varanda arejada para usufruir do canto dos pássaros. A área possui dois mil metros quadrados, onde pode desfrutar de um delicioso jardim e uma piscina de 9m X 4m com espaço para churrasco e lazer. Disponibilizamos 1 arrumadeira para a manutenção da limpeza da casa que também pode preparar café da manhã. 100 Megas internet Estarei sempre disponivél via whatsapp! A praça mais carismática do Brasil. Existe desde o século 16, quando os jesuítas construíram um arraial no alto do morro: casinhas simples enfileiradas de um lado e do outro, com uma igrejinha branca na beira da falésia, de costas para o mar. Isolada por quatro séculos, redescoberta apenas nos anos 70 pelas por hippies (ou 'biribandos', como foram apelidados pelos 'nativos'), esta praça -- o Quadrado -- resistiu, na aparência as fachadas simples foram embelezadas, mas não descaracterizadas. É possível chamar Uber no aeroporto de Porto Seguro, inclusive indicando um endereço em Trancoso. Mas tem uma pegadinha: ao chegar, o motorista vai propor um adicional por fora. Não é desonestidade -- é que em Trancoso não dá para chamar um Uber com destino a Porto Seguro, e o uberista vai voltar sem passageiro. Se você vai alugar carro, já saia motorizado do aeroporto. A balsa entre R$ 18,60 e R$ 22,90 por carro + R$ 5 por passageiro extra. O preço do trânsfer ida e volta normalmente equivale a várias diárias de carro alugado. Caso use o carro para fazer passeios (à Praia do Espelho e a Caraíva, por exemplo), o aluguel vai sair barato.",
  },
  {
    img: CB,
    key: String(Math.random()),
    name: "Casa Biriri",
    rate: "4 avaliações",
    price: 910,
    ocupacao: 8,
    quartos: 4,
    camas: 5,
    banheiros: 4,
    desc: "Inspirada na cultura Pataxó",
  },
  {
    img: CP,
    key: String(Math.random()),
    name: "Casa Penelope",
    rate: "7 avaliações",
    price: 2000,
    banheiros: 5,
    ocupacao: 10,
    quartos: 4,
    camas: 6,
    banheiros: 4,
    desc: "Ao lado do Capim Santo",
  }
];

const newhouses = [
  {
    img: VT,
    key: String(Math.random()),
    name: "Vila Tupi",
    rate: "6 avaliações",
    price: 840,
    ocupacao: 6,
    quartos: 3,
    banheiros: 2,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/19593d10-342c-4af7-952e-d2d4a682a385.jpg?w=1040', 'https://l.icdbcdn.com/oh/efedf234-c5c4-4145-83eb-20d364044ad2.jpg?w=1040', 'https://l.icdbcdn.com/oh/0f4e75f8-eea4-435c-bab3-05091b0a904d.jpg?w=1040', 'https://l.icdbcdn.com/oh/5e3e6903-5fa1-4887-9880-d9c934962a5a.jpg?w=1040', 'https://l.icdbcdn.com/oh/04b0569e-4e25-44c0-baff-4d4831c9d14e.jpg?w=1040', 'https://l.icdbcdn.com/oh/ae712100-f3d0-4e1b-b09e-87138c220149.jpg?w=1040', 'https://l.icdbcdn.com/oh/ea24743f-809d-4518-91e1-715aee6d0d5f.jpg?w=1040', 'https://l.icdbcdn.com/oh/78f6cfbb-e998-4b99-a39b-e106181c13d8.jpg?w=1040', 'https://l.icdbcdn.com/oh/6c02e8a6-d118-4e33-8360-42715fa0fadf.jpg?w=1040', 'https://l.icdbcdn.com/oh/5d799561-5fe1-4257-b819-1a1413e3a08c.jpg?w=1040', 'https://l.icdbcdn.com/oh/095307f3-4b2b-47cf-9ef3-551c8e3cd638.jpg?w=1040', 'https://l.icdbcdn.com/oh/bfa33e1d-2595-42aa-9b64-930424df4d5a.jpg?w=1040', 'https://l.icdbcdn.com/oh/c0045cb5-1117-4fa1-91b5-958654490ff4.jpg?w=1040', 'https://l.icdbcdn.com/oh/2fa3fb12-45e0-4d39-b5bf-f45e063638f3.jpg?w=1040', 'https://l.icdbcdn.com/oh/139d42be-3c10-48e2-9eae-d34cf8b404b0.jpg?w=1040', 'https://l.icdbcdn.com/oh/03f96c7c-6371-4010-a2b8-273f87aacdb2.jpg?w=1040', 'https://l.icdbcdn.com/oh/ebd22162-84c4-474d-bcb6-aea380350426.jpg?w=1040', 'https://l.icdbcdn.com/oh/5c7d33b9-7176-4b22-bafb-fa5e6587fe24.jpg?w=1040', 'https://l.icdbcdn.com/oh/265dc6de-2fc9-4b3f-95db-37c70675c707.jpg?w=1040'],
    destaques: ['Animais de estimação são bem-vindos', 'Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Cozinha', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Utensílhos de cozinha', 'Ferro e tábua de passar e Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (cabo)', '3 Cama queen size', '3 Quarto', 'Conjunto de primeiros socorros', 'Governanta incluída e Animais de estimação bem-vindos'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, s/n, Trancoso, Brasil',
    desc: "A 10 min da praia e do Quadrado, o sitio oferece sossego e segurança. A casa tem espaços amplos e agradáveis, que fazem você não querer sair. Linda área externa com piscina e decoração que traduzem a simplicidade baiana. Disponibilizamos 1 arrumadeira para a manutenção da limpeza da casa. A vila é tem 2 pisos no superior tem três suítes, sendo uma master com banheira, ar-condicionado, TV, wi-fi, cama queen Duas suítes com TV, ar-condicionado, wi-fi e camas queen. Todas as suítes possuem saídas para a varanda superior, onde pode relaxar com o ar fresco do sítio. Na parte inferior, uma sala de estar com tv, wi-fi e ar condicionado, com janelas amplas onde pode desfrutar do ar puro da natureza. Temos ainda uma sala de jantar compartilhada com a cozinha. Temo uma varanda arejada para usufruir do canto dos pássaros. A área possui dois mil metros quadrados, onde pode desfrutar de um delicioso jardim e uma piscina de 9m X 4m com espaço para churrasco e lazer. Disponibilizamos 1 arrumadeira para a manutenção da limpeza da casa que também pode preparar café da manhã. 100 Megas internet Estarei sempre disponivél via whatsapp! A praça mais carismática do Brasil. Existe desde o século 16, quando os jesuítas construíram um arraial no alto do morro: casinhas simples enfileiradas de um lado e do outro, com uma igrejinha branca na beira da falésia, de costas para o mar. Isolada por quatro séculos, redescoberta apenas nos anos 70 pelas por hippies (ou 'biribandos', como foram apelidados pelos 'nativos'), esta praça -- o Quadrado -- resistiu, na aparência as fachadas simples foram embelezadas, mas não descaracterizadas. É possível chamar Uber no aeroporto de Porto Seguro, inclusive indicando um endereço em Trancoso. Mas tem uma pegadinha: ao chegar, o motorista vai propor um adicional por fora. Não é desonestidade -- é que em Trancoso não dá para chamar um Uber com destino a Porto Seguro, e o uberista vai voltar sem passageiro. Se você vai alugar carro, já saia motorizado do aeroporto. A balsa entre R$ 18,60 e R$ 22,90 por carro + R$ 5 por passageiro extra. O preço do trânsfer ida e volta normalmente equivale a várias diárias de carro alugado. Caso use o carro para fazer passeios (à Praia do Espelho e a Caraíva, por exemplo), o aluguel vai sair barato.",
  },
  {
    img: RV,
    key: String(Math.random()),
    name: "Sitio Casa Rio Verde",
    rate: "2 avaliações",
    price: 589,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/9017d8e3-4bde-4a4c-9143-0b754a64d623.jpg?w=1040', 'https://l.icdbcdn.com/oh/909bc351-5448-44ca-aa31-695a118493f6.jpg?w=1040', 'https://l.icdbcdn.com/oh/37fa7a04-9d08-408c-acf1-46d1083bc721.jpg?w=1040', 'https://l.icdbcdn.com/oh/caf5bc7d-3f01-4dd9-89c7-257823934c3a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, Privado Recreio, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '3 Cama queen size', '3 Quarto', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Sítio Casa Rio Verde Rua sem nome, Porto Seguro - BA, 45810-000, Trancoso, Brasil',
    desc: "O charmoso Sítio Casa Rio Verde está a 3 km do centro da vila de Trancoso, no sul da Bahia. A casa é distribuída por 3 pisos, 2 suites no piso superior, equipadas com ar condicionado e varandas, 1 suite no piso jardim, equipada com ar condicionado e salão , com acesso a partir do exterior. No piso térreo Hall de entrada, cozinha, sala de jantar, sala de estar, sala de TV, uma casa de banho social e uma ampla varanda tudo ao redor de um jardim interno. Perto da Praia Rio Verde Perto da famosa Praia Rio Verde que tem mar tranquilo areia clarinha e coqueiros que decoram a paisagem, um cantinho para chamar de seu. O extenso jardim à volta da casa é ideal para descansar e a partir das varandas desfrutar da vista sobre um romântico vale percorrido pelo elegante Rio Verde. Está integralmente cercada e é dotada de câmera de segurança,portão automatico e um sistema de comunicação por voz,O caseiro está disponível 24 horas e os serviços de limpeza durante 4 horas por dia. Você precisará de apenas alguns minutos caminhando tranquilamente pelo Quadrado para cair de amores por Trancoso. as casinhas coloridas são a cara do vilarejo.",
  },
  {
    img: CB,
    key: String(Math.random()),
    name: "Casa Biriri",
    rate: "5 avaliações",
    price: 910,
    ocupacao: 8,
    quartos: 4,
    banheiros: 4,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, Privado Recreio, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 2 Cama king-size e 2 Cama de solteiro', '4 Banheiro e 4 Quarto', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praia dos Nativos - Estr. de Trancoso , Porto Seguro, Brasil',
    desc: "Inspirada na cultura indígena Pataxó, com características de casas gregas, e um toque praiano do sul da Bahia, a casa fica localizada à 950 m do Quadrado de Trancoso e 1150 m da Praia dos Nativos. Conta com 4 suítes, sala de estar espaçosa, cozinha equipada, escrivaninha Home-Office e wi-fi rápido. Cada suíte possui ar condicionado e 3 delas entradas independentes e varandas. Garagem privativa, amplo jardim com árvores nativas, deck de madeira com mesa de jantar, área de relaxamento, churrasqueira e uma ducha rustica externa. Tudo para conhecer Trancoso em alto padrão.",
  },
  {
    img: CP,
    key: String(Math.random()),
    name: "Casa Penelope",
    rate: "3 avaliações",
    price: 2000,
    ocupacao: 10,
    quartos: 4,
    banheiros: 4,
    camas: 6,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 1 Cama king-size, 2 Cama queen size e 2 Sofá cama', '4 Banheiro e 4 Quarto', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, 12 , Trancoso, Brasil',
    desc: "localizada ao lado do estacionamento do Capim Santo , antes da ladeira que desce para o rio Trancoso acomoda até 10 pessoas ",
  },
  {
    img: IE,
    key: String(Math.random()),
    name: "Iemanjá Beach House",
    rate: "3 avaliações",
    price: 2200,
    ocupacao: 6,
    quartos: 2,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 1 Cama king-size, 1 Cama king-size ', '3 Banheiro e 2 Quarto', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, 12 , Trancoso, Brasil',
    desc: "Estr. do Rio Verde , Porto Seguro, Brasil",
  },
  {
    img: CM,
    key: String(Math.random()),
    name: "Casa dos Macacos",
    rate: "3 avaliações",
    price: 1700,
    ocupacao: 10,
    quartos: 5,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Entretenmento', 'Dormitórios', 'Habitações', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '5 Cama de casal', '5 Banheiro e 5 Quarto', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, 12 , Trancoso, Brasil',
    desc: "Estr. dos Macacos , Porto Seguro, Brasil",
  },
  {
    img: CC,
    key: String(Math.random()),
    name: "Casa Corais do Sul",
    rate: "3 avaliações",
    price: 950,
    ocupacao: 10,
    quartos: 5,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, 12 , Trancoso, Brasil',
    desc: "A casa possui quatro suítes privativas com ar condicionado, 2 banheiros, cozinha gourmet,  sala com vista para o jardim, piscina grande,  churrasqueira na varanda, redes e pufs completam o ambiente externo. Todos os ambientes possuem rede wi-fi. Localizada no condomínio Coqueiral que fica a 10 minutos de carro do Quadrado e 12 minutos de carro da praia dos Coqueiros. Este é o local é ideal para quem procura privacidade, tranquilidade  e conforto em ambiente descontraído e  intimista preparado para fazer que suas férias sejam especiais.    ",
  },
  {
    img: CU,
    key: String(Math.random()),
    name: "Casa Ubirajara",
    rate: "3 avaliações",
    price: 9000,
    ocupacao: 12,
    quartos: 4,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Rua João Vieira , Trancoso, Brasilß',
    desc: "A Casa localizada em um terreno de 600m². Fica a 400m do Quadrado de Trancoso e 800 m da praia. Em 20 minutos de caminhada você consegue chegar à Praia dos Nativos. A hospedagem é ideal para família e grupo de amigos. • Acomoda até 12 pessoas confortavelmente 04 suítes com ar condicionado • Hidromassagem • Sala e cozinha equipadas",
  },
  {
    img: CMT,
    key: String(Math.random()),
    name: "Casa Makuna",
    rate: "3 avaliações",
    price: 450,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habitações', 'Dormitórios', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', '3 Banheiro e 3 Quarto', '2 Cama de casal e 1 Cama queen size', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'R. Carlos Chagas, 774 , Porto Seguro, Brasil',
    desc: "Grande sala com cozinha americana, grande varanda, piscina de 10m x 4m , entrada com um portão com interfone e com código digital, casa completamente mobiliada, fechaduras da casa eletrônica com código, serviço de recepção das 8h-13h , água, luz, internet- wifi, sky tv, serviço de limpeza, troca de toalhas e roupas de cama à cada 3-4 dias, jardinagem e limpeza da piscina incluiído no aluguel.",
  },
  {
    img: DG,
    key: String(Math.random()),
    name: "Dende",
    rate: "3 avaliações",
    price: 600,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Manoel Alves dos Santos, 80, centro de trancoso , Trancoso, Brasil',
    desc: "O nosso espaço dispõe de uma suíte e dois quartos com decoração aconchegante, ideal para férias ou home office, desfrute de tudo o que Trancoso tem para oferecer!  Os nossos serviços inclem  limpeza, garagem e wi-fi . Estamos situados no centro de Trancoso  munido de  restaurantes farmácias bancos e supermercado, estamos perto do Quadrado de Trancoso (1 km) e da Praia dos Nativos (1.7km) estando em localização perfeita para agradar a todos.",
  },
  {
    img: MR,
    key: String(Math.random()),
    name: "Casa Manga Rosa",
    rate: "4 avaliações",
    price: 720,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habitações', 'Dormitórios', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', '3 Banheiro e 3 Quarto', '2 Cama de casal e 1 Cama queen size', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praia dos Nativos - Estr. de Trancoso , Porto Seguro, Brasil',
    desc: "Casa Manga Rosa recentemente construída em um condomínio fechado com segurança 24horas e estacionamento privativo dentro da casa, logo na entrada de Trancoso, a 150 m da rua principal, 2 km do Quadrado Histórico e cerca de 2,5 km das praias. A casa tem decoração inspirada no estilo de vida de Trancoso, com ambientes abertos e super ventilados trazendo um ar tropical e aconchegante ao ambiente. Com 3 suítes e uma piscina privativa livre de cloro com hidromassagem, onde o sol bate o dia inteiro,  estamos de portas abertas para recebê-los em grande estilo.",
  },
  {
    img: TC,
    key: String(Math.random()),
    name: "Vila Terra-Cota",
    rate: "4 avaliações",
    price: 800,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habitações', 'Dormitórios', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', '2 Banheiro e 2 Quarto', '1 Cama de casal, 1 Cama king-size, 1 Cama queen size e 2 Cama de solteiro', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Rua Alfa , Porto Seguro, Brasil',
    desc: "Propriedade composta por duas casas de dois andares e duas piscinas interligadas por portão, no térreo de ambas as vilas  tem cozinha, sala, banheiro social e lavabo, no primeiro andar 2  suítes com ar condicionado, sendo uma com varanda e vista para a piscina e mata nativa. Com área de churrasco, serviço de camareira diário e wi-fi  ofereço esta propriedade inserida em condomínio para sua temporada em trancoso, perto das praias mais famosas e do Quadrado de trancoso.",
  },
  {
    img: CH,
    key: String(Math.random()),
    name: "Casa Haselgrubler",
    rate: "4 avaliações",
    price: 500,
    ocupacao: 8,
    quartos: 2,
    banheiros: 2,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: '32 Rua do Beco, 55 , Trancoso, Brasil',
    desc: "Charmosa casa no centro de Trancoso  com arvores de frutos e extenso jardim 2500 m2 e  dividida em 5 níveis!    ",
  },
  {
    img: CS,
    key: String(Math.random()),
    name: "Casa Satinka",
    rate: "4 avaliações",
    price: 3500,
    ocupacao: 8,
    quartos: 4,
    banheiros: 4,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: '32 Rua do Beco, 55 , Trancoso, Brasil',
    desc: "Localizada no complexo do rio da Barra Villa hotel  a Casa  é o refúgio ideal para quem busca sossego e tranquilidade. Cercada de Mata nativa e região de falésias, a casa dispõe de 4 lindas suítes privativas sendo 3 suítes no piso térreo e uma suíte no andar superior.    ",
  },
  {
    img: CMM,
    key: String(Math.random()),
    name: "Casa Potira",
    rate: "4 avaliações",
    price: 2500,
    ocupacao: 10,
    quartos: 5,
    banheiros: 6,
    camas: 2,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'R. Alfa , Porto Seguro, Brasil',
    desc: "Casa localizada em condomínio fechado próximo a Rua Alfa, Trancoso.",
  },
  {
    img: CCA,
    key: String(Math.random()),
    name: "Casa Campestre",
    rate: "4 avaliações",
    price: 1700,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'Praça São João Batista, 12 , Trancoso, Brasil',
    desc: "A  Casa possui 2 Suítes no andar superior, cama queen de casal e 1 cama de solteiro em cada Suíte.",
  },
  {
    img: CA,
    key: String(Math.random()),
    name: "Casa de Praia Angatu",
    rate: "11 avaliações",
    price: 810,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanitário', 'Estacionamento', 'Diversos', 'Mais informações'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terraço', 'Máquina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Incluído', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crianças bem-vindas, Governanta incluída, Adequado para pessoas idosas ou doentes e Acessível para cadeiras de rodas'
    ],
    regras: ['Governanta incluída', 'Animais de estimação bem-vindos'],
    locationCords: [
      {
        'longitudeY': -429535,
        'latitudeX': -64634,
        'longitudeX': 24245,
        'latitudeY': -2223
      }
    ],
    politicas: [
      '100% due at time of booking',
      'VaLor restante: A vencer posteriormente',
      '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
      '0% reembolsáve, caso seja cancelado depois.'
    ],
    location: 'R. Condomínio Recanto das Pérolas, 33 , Vera Cruz, Brasil',
    desc: "A Casa Angatu Tal como o significado do nome da nossa pousada, queremos dar-lhe as Boas-vindas a este nosso pequeno paraíso na ilha de Itaparica. Localizada à beira-mar na praia de Aratuba, na parte mais tranquila da ilha que é conhecida pelas suas piscinas naturais de águas translúcidas e mornas. Aqui pode aproveitar a simplicidade e a beleza da natureza, para relaxar ou optar por diversas actividades. O Ambiente Perfeito A nossa casa, com decoração simples mas charmosa, possuí o necessário para que se sinta confortável. Usufrua da ampla sala com vista panorâmica para a praia. A escolha é sua, pode contemplar o mar, ler na rede embalado pela brisa ou organizar actividades com o seu grupo de amigos. Uma master suíte superior vista mar, quatro suítes vista jardim com entradas independentes proporcionam a privacidade que precisa. Decoradas com elementos naturais que remetem para a paisagem envolvente, apostamos no conforto como convite ao repouso. Itaparica a maior ilha da Bahia de Todos os Santos Ficou famosa como zona balnearia de repouso devido ás suas bonitas praias e á água mineral que jorra da Fonte da Bica. Cercada por recifes de corais é banhada pelo mar de um azul cristalino, tranquilo e morno. Possuindo uma exuberante vegetação de manguezais e coqueirais e um clima fantástico o ano inteiro, torna-se por isso um bom convite em qualquer ocasião. Venha conhecer a ilha onde nasceu João Ubaldo Ribeiro, viver sua simplicidade de costumes, percorrer as ruas de paralelepípedos com seus tradicionais e preservados casarões centenários. Caminhe nas praias observando os marisqueiros apanhando chumbinhos e lambretas, os pescadores puxando as redes, tome um banho de mar no por do sol e espere as primeiras estrelas surgirem no céu. Jante num dos restaurantes “Pé na Areia” sempre abastecidos de fresco pescado e frutos do mar, conviva com os locais que aproveitam a frescura da brisa enquanto a lua se reflete no mar..",
  },
];

const Restaurantes = [
  {
    img: CS,
    key: String(Math.random()),
    name: "Capim Santo",
    rate: "1.674 avaliações",
    price: "$$$$",
    desc: "Brasileira",
  },
  {
    img: RR,
    key: String(Math.random()),
    name: "Restaurante Rabanete",
    rate: "846 avaliações",
    price: "$$$",
    desc: "Brasileira",
  },
  {
    img: HSJ,
    key: String(Math.random()),
    name: "Hamburgueria São João",
    rate: "155 avaliações",
    price: "$$$",
    desc: "Pizza",
  },
  {
    img: LC,
    key: String(Math.random()),
    name: "La Cevicheria",
    rate: "319 avaliações",
    price: "$$$",
    desc: "Peruana, Latina",
  },
  {
    img: CA,
    key: String(Math.random()),
    name: "A Creperia",
    rate: "202 avaliações",
    price: "$$",
    desc: "Francesa, Europa",
  },
];

const RestaurantesPraia = [
  {
    img: UV,
    key: String(Math.random()),
    name: "Uiki Vila à Beira-Mar",
    rate: "500 avaliações",
    price: "$$$",
    desc: "Brasileira",
  },
  {
    img: SB,
    key: String(Math.random()),
    name: "Sunrise Beach Club",
    rate: "75 avaliações",
    price: "$$$",
    desc: "Brasileira",
  },
];

const passeios = [
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b8/a5/6f/quadrado.jpg?w=400&h=300&s=1',
    key: String(Math.random()),
    name: "Quadrado",
    rate: "5.0",
    price: 0,
    desc: "Áreas históricas para caminhadas.",
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/7f/93/20190502-134411-largejpg.jpg?w=400&h=300&s=1',
    key: String(Math.random()),
    name: "Praia do Espelho",
    rate: "5.0",
    price: 0,
    desc: "Praias",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/8c/59/02/praia-dos-coqueiros.jpg?w=400&h=300&s=1",
    key: String(Math.random()),
    name: 'Praia dos Coqueiros',
    rate: "5.0",
    price: 0,
    desc: "Praias",
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/42/58/0b/praia-do-rio-da-barra.jpg?w=400&h=-1&s=1',
    key: String(Math.random()),
    name: "Praia do Rio da Barra",
    rate: "5.0",
    price: 0,
    desc: "Praias",
  },
  {
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/49/bc/ea/nativos-beach-trancoso.jpg?w=400&h=-1&s=1',
    key: String(Math.random()),
    name: "Praia dos Nativos",
    rate: "5.0",
    price: 0,
    desc: "Praias",
  },
];

const HomeScreen = () => {
  const [showbars, setShowbars] = React.useState(false);
  const [acomodacoes, setAcomodacoes] = React.useState(true);
  const [passeios, setPasseios] = React.useState(false);
  const [restaurantes, setRestaurantes] = React.useState(false);

  const [busca, setBusca] = React.useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value) {
        alert(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  // async function retrieveData() {
  // 	try {
  // 		const value = await AsyncStorage.getItem('@isLogged:key');
  // 		if (value) {
  // 		  // We have data!!
  // 		  alert(value);
  // 		}
  // 	  } catch (error) {
  // 		alert(error);
  // 	  }
  // };

  // retrieveData();

  const Header = () => {
    return (
      <>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? 25 : 15,
            paddingHorizontal: 20,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 28 }}>Wellness</Text>
        </View>
      </>
    );
  };

  const Categorias = () => {
    return (
      <>
        <Container>
          <TouchableOpacity
            onPress={() => {
              if (passeios) {
                setPasseios(!passeios);
              }
              if (restaurantes) {
                setRestaurantes(!restaurantes);
              }
              setAcomodacoes(!acomodacoes);
            }}
            style={{
              marginLeft: 20,
              marginHorizontal: 10,
              marginVertical: 10,
              width: "auto",
              height: "auto",
              padding: 10,
              borderWidth: 1,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: acomodacoes ? "#fff" : "#000",
              backgroundColor: acomodacoes ? "#000" : "#fff",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ marginRight: 10, color: acomodacoes ? "#fff" : "#000" }}
            >
              Acomodações
            </Text>
            <MaterialCommunityIcons
              name="home-roof"
              size={16}
              color={acomodacoes ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (acomodacoes) {
                setAcomodacoes(!acomodacoes);
              }
              if (passeios) {
                setPasseios(!passeios);
              }
              setRestaurantes(!restaurantes);
            }}
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              width: "auto",
              height: "auto",
              padding: 10,
              borderWidth: 1,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: restaurantes ? "#fff" : "#000",
              backgroundColor: restaurantes ? "#000" : "#fff",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ marginRight: 10, color: restaurantes ? "#fff" : "#000" }}
            >
              Restaurantes
            </Text>
            <MaterialIcons
              name="dinner-dining"
              size={16}
              color={restaurantes ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (acomodacoes) {
                setAcomodacoes(!acomodacoes);
              }
              if (restaurantes) {
                setRestaurantes(!restaurantes);
              }
              setPasseios(!passeios);
            }}
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              width: "auto",
              height: "auto",
              padding: 10,
              borderWidth: 1,
              justifyContent: "space-between",
              alignItems: "center",
              borderColor: passeios ? "#fff" : "#000",
              backgroundColor: passeios ? "#000" : "#fff",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ marginRight: 10, color: passeios ? "#fff" : "#000" }}
            >
              Passeios
            </Text>
            <Fontisto
              name="beach-slipper"
              size={16}
              color={passeios ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </Container>
      </>
    );
  };

  const Section = () => {
    return (
      <View style={{}}>
        <View
          style={{
            width: "100%",
            height: "auto",
            paddingLeft: 20,
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 26,
              width: "70%",
              fontWeight: "bold",
            }}
          >
            {acomodacoes
              ? "A casa dos seus sonhos te espera"
              : passeios
                ? "Uma experiência icrível te espera"
                : restaurantes
                  ? "Pois comer é fundamental"
                  : "A casa dos seus sonhos te espera"}
          </Text>
          <Text style={{ color: "#333", fontSize: 20, width: "80%" }}>
            {acomodacoes
              ? "Encontre a sua estadia perfeita em Trancoso"
              : passeios
                ? "Passeios incríveis com os melhores guias"
                : restaurantes
                  ? "Selecionamos os melhores restaurantes de Trancoso."
                  : "Encontre a sua estadia perfeita em Trancoso"}
          </Text>
        </View>
      </View>
    );
  };

  const SectionReveillon = () => {
    return (
      <>
        <View
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#000",
            marginVertical: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 32, color: "#fff" }}>
            Reveillon Trancoso 2021
          </Text>
          <Text style={{ fontSize: 22, color: "#fff" }}>
            Confira as propriedades que ainda estão disponiveis para o reveillon
            de 2021.
          </Text>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('Reveillon')
          }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 50,
              marginTop: 20,
              backgroundColor: "#fff",
            }}
          >
            <Text>Confira agora</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const HorizontalView = (data) => {
    return (
      <View style={{}}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            color: "#000",
            fontSize: 20,
            width: "70%",
            fontWeight: "bold",
          }}
        >
          Propriedades para temporada em Trancoso
        </Text>
        <Text style={{ marginLeft: 20, marginBottom: 10 }}>
          Achamos que você vai gostar dessas casas para uma escapada da cidade.
        </Text>
        <Container style={{ paddingLeft: 20, flexDirection: "row" }}>
          {newhouses.map((house) => (
            <View key={house.key} style={{ marginRight: 15 }}>
              <Pressable
                style={{ cursor: "pointer" }}
                onPress={() =>
                  navigation.navigate("House", {
                    ocupacao: house.ocupacao,
                    quartos: house.quartos,
                    camas: house.camas,
                    banheiros: house.banheiros,
                    image: house.img,
                    name: house.name,
                    rate: house.rate,
                    price: house.price,
                    desc: house.desc,
                  })
                }
              >
                <Image
                  source={house.img}
                  style={{
                    height: 200,
                    width: 300,
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
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {house.name}
                  </Text>

                  <Text style={{ fontSize: 16 }}>{house.rate}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ width: 300, display: "flex", justifyContent: 'space-between', display: 'flex', flexDirection: "row" }}>
                    <Text style={{ fontSize: 12, fontWeight: "400" }}>
                      {" "}
                      Trancoso
                    </Text>
                    <Text style={{ marginLeft: 'auto', fontSize: 12, fontWeight: "600" }}>
                      {" "}
                      R${house.price}/dia
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </Container>
      </View>
    );
  };

  const MapaSearch = (data) => {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 24,
            marginLeft: 20,
            marginTop: 20,
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          ...
        </Text>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View style={{ maxWidth: '100%', marginHorizontal: "auto" }}>
          <Header />
          <ScrollView style={{ height: "100%" }}>
            <View
              style={{
                width: "100%",
                height: "auto",
                padding: 20,
                marginBottom: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("COVID-19");
                }}
              >
                <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
                  Confira nossa resposta contra COVID-19
              </Text>
              </TouchableOpacity>
            </View>
            <Section />
            <Categorias />
            {acomodacoes ? (
              <>
                <HorizontalView />
                <HorizontalView />
              </>
            ) : passeios ? (
              <>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 20,
                    width: "70%",
                    fontWeight: "bold",
                  }}
                >
                  Visite em Trancoso
              </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 16,
                    width: "70%",
                  }}
                >
                  Lugares para ver, maneiras de explorar e experiências típicas.
              </Text>
                <Container style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}>
                  {Passeios.map((house) => (
                    <View key={house.key} style={{ marginRight: 15 }}>
                      <Pressable
                        style={{ cursor: "pointer" }}
                        onPress={() =>
                          navigation.navigate("House", {
                            ocupacao: house.ocupacao,
                            quartos: house.quartos,
                            camas: house.camas,
                            banheiros: house.banheiros,
                            image: house.img,
                            name: house.name,
                            rate: house.rate,
                            price: house.price,
                            desc: house.desc,
                          })
                        }
                      >
                        <Image
                          source={house.img}
                          style={{
                            height: 200,
                            width: 250,
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
                          <Text style={{ width: '60%', fontSize: 16, fontWeight: "bold" }}>
                            {house.name}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.rate}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontSize: 12, fontWeight: "400" }}>
                            {house.desc}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  ))}
                </Container>
                <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 20,
                    width: "70%",
                    fontWeight: "bold",
                  }}
                >
                  Praias incríveis
              </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 16,
                    width: "70%",
                  }}
                >
                  As praias mais lindas de Trancoso.
              </Text>
                <Container style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}>
                  {Praias.map((house) => (
                    <View key={house.key} style={{ marginRight: 15 }}>
                      <Pressable
                        style={{ cursor: "pointer" }}
                        onPress={() =>
                          navigation.navigate("House", {
                            ocupacao: house.ocupacao,
                            quartos: house.quartos,
                            camas: house.camas,
                            banheiros: house.banheiros,
                            image: house.img,
                            name: house.name,
                            rate: house.rate,
                            price: house.price,
                            desc: house.desc,
                          })
                        }
                      >
                        <Image
                          source={house.img}
                          style={{
                            height: 200,
                            width: 250,
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
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {house.name}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.rate}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontSize: 12, fontWeight: "400" }}>
                            {house.desc}
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  ))}
                </Container>
              </>
            ) : restaurantes ? (
              <>
                <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 20,
                    width: "70%",
                    fontWeight: "bold",
                  }}
                >
                  Restaurantes na Praia
              </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 16,
                    width: "70%",
                  }}
                >
                  {"Que tal um almoço na praia? 🏖"}
                </Text>
                <Container style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}>
                  {RestaurantesPraia.map((house) => (
                    <View key={house.key} style={{ marginRight: 15 }}>
                      <Pressable
                        style={{ cursor: "pointer" }}
                        onPress={() =>
                          navigation.navigate("Restaurante", {
                            ocupacao: house.ocupacao,
                            quartos: house.quartos,
                            camas: house.camas,
                            banheiros: house.banheiros,
                            image: house.img,
                            name: house.name,
                            rate: house.rate,
                            price: house.price,
                            desc: house.desc,
                          })
                        }
                      >
                        <Image
                          source={house.img}
                          style={{
                            height: 200,
                            width: 250,
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
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {house.name}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.desc}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {house.rate}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.price}</Text>
                        </View>
                      </Pressable>
                    </View>
                  ))}
                </Container>
                <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 20,
                    width: "70%",
                    fontWeight: "bold",
                  }}
                >
                  Selecionamos para você
              </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 16,
                    width: "70%",
                  }}
                >
                  Nossa seleção de restaurantes.
              </Text>
                <Container style={{ paddingLeft: 20, marginTop: 10, flexDirection: "row" }}>
                  {Restaurantes.map((house) => (
                    <View key={house.key} style={{ marginRight: 15 }}>
                      <Pressable
                        style={{ cursor: "pointer" }}
                        onPress={() =>
                          navigation.navigate("Restaurante", {
                            ocupacao: house.ocupacao,
                            quartos: house.quartos,
                            camas: house.camas,
                            banheiros: house.banheiros,
                            image: house.img,
                            name: house.name,
                            rate: house.rate,
                            price: house.price,
                            desc: house.desc,
                          })
                        }
                      >
                        <Image
                          source={house.img}
                          style={{
                            height: 200,
                            width: 250,
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
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {house.name}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.desc}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {house.rate}
                          </Text>
                          <Text style={{ fontSize: 16 }}>{house.price}</Text>
                        </View>
                      </Pressable>
                    </View>
                  ))}
                </Container>
              </>
            ) : (
              <>
                <HorizontalView />
                <HorizontalView />
              </>
            )}
            <View style={{ height: 170 }} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
