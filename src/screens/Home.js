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
    rate: "2 avalia????es",
    price: 0,
    desc: "Praias",
  },
  {
    img: PE,
    key: String(Math.random()),
    name: "Praia do Espelho",
    rate: "4 avalia????es",
    price: 256,
    desc: "Praias",
  },
  {
    img: PC,
    key: String(Math.random()),
    name: "Praia dos Coqueiros",
    rate: "6 avalia????es",
    price: 256,
    desc: "Praias",
  },
  {
    img: PN,
    key: String(Math.random()),
    name: "Praia dos Nativos",
    rate: "5 avalia????es",
    price: 256,
    desc: "Praias",
  },
];

const Passeios = [
  {
    img: Quadrado,
    key: String(Math.random()),
    name: "Quadrado",
    rate: "6 avalia????es",
    price: 0,
    desc: "??reas hist??ricas para caminhadas.",
  },
  {
    img: SJ,
    key: String(Math.random()),
    name: "Igreja de S??o Jo??o Batista",
    rate: "3 avalia????es",
    price: 256,
    desc: "Igrejas e catedrais",
  },
  {
    img: TG,
    key: String(Math.random()),
    name: "Terravista Gold",
    rate: "3 avalia????es",
    price: 256,
    desc: "Campos de golfe",
  },
  {
    img: OC,
    key: String(Math.random()),
    name: "O Centro Music Bar",
    rate: "2 avalia????es",
    price: 256,
    desc: "Bares e clubes",
  },
];

const houses = [
  {
    img: VT,
    key: String(Math.random()),
    name: "Vila Tupi",
    rate: "6 avalia????es",
    price: 840,
    ocupacao: 6,
    quartos: 3,
    banheiros: 2,
    camas: 3,
    destaques: ['Animais de estima????o s??o bem-vindos', 'Estacionamento', 'Wi-Fi Internet'],
    servicos: [
      {
        'title': 'Cozinha',
        'desc': 'Utens??lhos de cozinha'
      },
      {
        'title': 'Lavanderia',
        'desc': 'Ferro e t??bua de passar e M??quina de lavar roupa'
      },
      {
        'title': 'Sanit??rio',
        'desc': 'Itens essenciais, Toalhas e Hidromassagem'
      },
      {
        'title': 'Estacionamento',
        'desc': 'Estacionamento Inclu??do'
      },
      {
        'title': 'Entretenmento',
        'desc': 'Wi-Fi Internet e TV (cabo)'
      },
      {
        'title': 'Dormit??rios',
        'desc': '3 Cama queen size'
      },
      {
        'title': 'Habita????es',
        'desc': '3 Quarto'
      },
      {
        'title': 'Diversos',
        'desc': 'Conjunto de primeiros socorros'
      },
      {
        'title': 'Mais informa????es',
        'desc': 'Governanta inclu??da e Animais de estima????o bem-vindos'
      },
    ],
    regras: [
      {
        'title': 'Governanta inclu??da'
      },
      {
        'title': 'Animais de estima????o bem-vindos'
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
        'title': 'Pol??tica de cancelamento',
        'desc': [
          '50% of paid prepayments refundable when canceled 19 days before arrival or earlier',
          '0% reembols??ve, caso seja cancelado depois.'
        ]
      },
      {
        'title': 'Dep??sito de fian??a',
        'desc': 'N??o h?? dep??sito de fian??a a vencer'
      }
    ],
    location: 'Pra??a S??o Jo??o Batista, s/n, Trancoso, Brasil',
    desc: "A 10 min da praia e do Quadrado, o sitio oferece sossego e seguran??a. A casa tem espa??os amplos e agrad??veis, que fazem voc?? n??o querer sair. Linda ??rea externa com piscina e decora????o que traduzem a simplicidade baiana. Disponibilizamos 1 arrumadeira para a manuten????o da limpeza da casa. A vila ?? tem 2 pisos no superior tem tr??s su??tes, sendo uma master com banheira, ar-condicionado, TV, wi-fi, cama queen Duas su??tes com TV, ar-condicionado, wi-fi e camas queen. Todas as su??tes possuem sa??das para a varanda superior, onde pode relaxar com o ar fresco do s??tio. Na parte inferior, uma sala de estar com tv, wi-fi e ar condicionado, com janelas amplas onde pode desfrutar do ar puro da natureza. Temos ainda uma sala de jantar compartilhada com a cozinha. Temo uma varanda arejada para usufruir do canto dos p??ssaros. A ??rea possui dois mil metros quadrados, onde pode desfrutar de um delicioso jardim e uma piscina de 9m X 4m com espa??o para churrasco e lazer. Disponibilizamos 1 arrumadeira para a manuten????o da limpeza da casa que tamb??m pode preparar caf?? da manh??. 100 Megas internet Estarei sempre disponiv??l via whatsapp! A pra??a mais carism??tica do Brasil. Existe desde o s??culo 16, quando os jesu??tas constru??ram um arraial no alto do morro: casinhas simples enfileiradas de um lado e do outro, com uma igrejinha branca na beira da fal??sia, de costas para o mar. Isolada por quatro s??culos, redescoberta apenas nos anos 70 pelas por hippies (ou 'biribandos', como foram apelidados pelos 'nativos'), esta pra??a -- o Quadrado -- resistiu, na apar??ncia as fachadas simples foram embelezadas, mas n??o descaracterizadas. ?? poss??vel chamar Uber no aeroporto de Porto Seguro, inclusive indicando um endere??o em Trancoso. Mas tem uma pegadinha: ao chegar, o motorista vai propor um adicional por fora. N??o ?? desonestidade -- ?? que em Trancoso n??o d?? para chamar um Uber com destino a Porto Seguro, e o uberista vai voltar sem passageiro. Se voc?? vai alugar carro, j?? saia motorizado do aeroporto. A balsa entre R$ 18,60 e R$ 22,90 por carro + R$ 5 por passageiro extra. O pre??o do tr??nsfer ida e volta normalmente equivale a v??rias di??rias de carro alugado. Caso use o carro para fazer passeios (?? Praia do Espelho e a Cara??va, por exemplo), o aluguel vai sair barato.",
  },
  {
    img: CB,
    key: String(Math.random()),
    name: "Casa Biriri",
    rate: "4 avalia????es",
    price: 910,
    ocupacao: 8,
    quartos: 4,
    camas: 5,
    banheiros: 4,
    desc: "Inspirada na cultura Patax??",
  },
  {
    img: CP,
    key: String(Math.random()),
    name: "Casa Penelope",
    rate: "7 avalia????es",
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
    rate: "6 avalia????es",
    price: 840,
    ocupacao: 6,
    quartos: 3,
    banheiros: 2,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/19593d10-342c-4af7-952e-d2d4a682a385.jpg?w=1040', 'https://l.icdbcdn.com/oh/efedf234-c5c4-4145-83eb-20d364044ad2.jpg?w=1040', 'https://l.icdbcdn.com/oh/0f4e75f8-eea4-435c-bab3-05091b0a904d.jpg?w=1040', 'https://l.icdbcdn.com/oh/5e3e6903-5fa1-4887-9880-d9c934962a5a.jpg?w=1040', 'https://l.icdbcdn.com/oh/04b0569e-4e25-44c0-baff-4d4831c9d14e.jpg?w=1040', 'https://l.icdbcdn.com/oh/ae712100-f3d0-4e1b-b09e-87138c220149.jpg?w=1040', 'https://l.icdbcdn.com/oh/ea24743f-809d-4518-91e1-715aee6d0d5f.jpg?w=1040', 'https://l.icdbcdn.com/oh/78f6cfbb-e998-4b99-a39b-e106181c13d8.jpg?w=1040', 'https://l.icdbcdn.com/oh/6c02e8a6-d118-4e33-8360-42715fa0fadf.jpg?w=1040', 'https://l.icdbcdn.com/oh/5d799561-5fe1-4257-b819-1a1413e3a08c.jpg?w=1040', 'https://l.icdbcdn.com/oh/095307f3-4b2b-47cf-9ef3-551c8e3cd638.jpg?w=1040', 'https://l.icdbcdn.com/oh/bfa33e1d-2595-42aa-9b64-930424df4d5a.jpg?w=1040', 'https://l.icdbcdn.com/oh/c0045cb5-1117-4fa1-91b5-958654490ff4.jpg?w=1040', 'https://l.icdbcdn.com/oh/2fa3fb12-45e0-4d39-b5bf-f45e063638f3.jpg?w=1040', 'https://l.icdbcdn.com/oh/139d42be-3c10-48e2-9eae-d34cf8b404b0.jpg?w=1040', 'https://l.icdbcdn.com/oh/03f96c7c-6371-4010-a2b8-273f87aacdb2.jpg?w=1040', 'https://l.icdbcdn.com/oh/ebd22162-84c4-474d-bcb6-aea380350426.jpg?w=1040', 'https://l.icdbcdn.com/oh/5c7d33b9-7176-4b22-bafb-fa5e6587fe24.jpg?w=1040', 'https://l.icdbcdn.com/oh/265dc6de-2fc9-4b3f-95db-37c70675c707.jpg?w=1040'],
    destaques: ['Animais de estima????o s??o bem-vindos', 'Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Cozinha', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Utens??lhos de cozinha', 'Ferro e t??bua de passar e M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (cabo)', '3 Cama queen size', '3 Quarto', 'Conjunto de primeiros socorros', 'Governanta inclu??da e Animais de estima????o bem-vindos'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, s/n, Trancoso, Brasil',
    desc: "A 10 min da praia e do Quadrado, o sitio oferece sossego e seguran??a. A casa tem espa??os amplos e agrad??veis, que fazem voc?? n??o querer sair. Linda ??rea externa com piscina e decora????o que traduzem a simplicidade baiana. Disponibilizamos 1 arrumadeira para a manuten????o da limpeza da casa. A vila ?? tem 2 pisos no superior tem tr??s su??tes, sendo uma master com banheira, ar-condicionado, TV, wi-fi, cama queen Duas su??tes com TV, ar-condicionado, wi-fi e camas queen. Todas as su??tes possuem sa??das para a varanda superior, onde pode relaxar com o ar fresco do s??tio. Na parte inferior, uma sala de estar com tv, wi-fi e ar condicionado, com janelas amplas onde pode desfrutar do ar puro da natureza. Temos ainda uma sala de jantar compartilhada com a cozinha. Temo uma varanda arejada para usufruir do canto dos p??ssaros. A ??rea possui dois mil metros quadrados, onde pode desfrutar de um delicioso jardim e uma piscina de 9m X 4m com espa??o para churrasco e lazer. Disponibilizamos 1 arrumadeira para a manuten????o da limpeza da casa que tamb??m pode preparar caf?? da manh??. 100 Megas internet Estarei sempre disponiv??l via whatsapp! A pra??a mais carism??tica do Brasil. Existe desde o s??culo 16, quando os jesu??tas constru??ram um arraial no alto do morro: casinhas simples enfileiradas de um lado e do outro, com uma igrejinha branca na beira da fal??sia, de costas para o mar. Isolada por quatro s??culos, redescoberta apenas nos anos 70 pelas por hippies (ou 'biribandos', como foram apelidados pelos 'nativos'), esta pra??a -- o Quadrado -- resistiu, na apar??ncia as fachadas simples foram embelezadas, mas n??o descaracterizadas. ?? poss??vel chamar Uber no aeroporto de Porto Seguro, inclusive indicando um endere??o em Trancoso. Mas tem uma pegadinha: ao chegar, o motorista vai propor um adicional por fora. N??o ?? desonestidade -- ?? que em Trancoso n??o d?? para chamar um Uber com destino a Porto Seguro, e o uberista vai voltar sem passageiro. Se voc?? vai alugar carro, j?? saia motorizado do aeroporto. A balsa entre R$ 18,60 e R$ 22,90 por carro + R$ 5 por passageiro extra. O pre??o do tr??nsfer ida e volta normalmente equivale a v??rias di??rias de carro alugado. Caso use o carro para fazer passeios (?? Praia do Espelho e a Cara??va, por exemplo), o aluguel vai sair barato.",
  },
  {
    img: RV,
    key: String(Math.random()),
    name: "Sitio Casa Rio Verde",
    rate: "2 avalia????es",
    price: 589,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/9017d8e3-4bde-4a4c-9143-0b754a64d623.jpg?w=1040', 'https://l.icdbcdn.com/oh/909bc351-5448-44ca-aa31-695a118493f6.jpg?w=1040', 'https://l.icdbcdn.com/oh/37fa7a04-9d08-408c-acf1-46d1083bc721.jpg?w=1040', 'https://l.icdbcdn.com/oh/caf5bc7d-3f01-4dd9-89c7-257823934c3a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, Privado Recreio, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '3 Cama queen size', '3 Quarto', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'S??tio Casa Rio Verde Rua sem nome, Porto Seguro - BA, 45810-000, Trancoso, Brasil',
    desc: "O charmoso S??tio Casa Rio Verde est?? a 3 km do centro da vila de Trancoso, no sul da Bahia. A casa ?? distribu??da por 3 pisos, 2 suites no piso superior, equipadas com ar condicionado e varandas, 1 suite no piso jardim, equipada com ar condicionado e sal??o , com acesso a partir do exterior. No piso t??rreo Hall de entrada, cozinha, sala de jantar, sala de estar, sala de TV, uma casa de banho social e uma ampla varanda tudo ao redor de um jardim interno. Perto da Praia Rio Verde Perto da famosa Praia Rio Verde que tem mar tranquilo areia clarinha e coqueiros que decoram a paisagem, um cantinho para chamar de seu. O extenso jardim ?? volta da casa ?? ideal para descansar e a partir das varandas desfrutar da vista sobre um rom??ntico vale percorrido pelo elegante Rio Verde. Est?? integralmente cercada e ?? dotada de c??mera de seguran??a,port??o automatico e um sistema de comunica????o por voz,O caseiro est?? dispon??vel 24 horas e os servi??os de limpeza durante 4 horas por dia. Voc?? precisar?? de apenas alguns minutos caminhando tranquilamente pelo Quadrado para cair de amores por Trancoso. as casinhas coloridas s??o a cara do vilarejo.",
  },
  {
    img: CB,
    key: String(Math.random()),
    name: "Casa Biriri",
    rate: "5 avalia????es",
    price: 910,
    ocupacao: 8,
    quartos: 4,
    banheiros: 4,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, Privado Recreio, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 2 Cama king-size e 2 Cama de solteiro', '4 Banheiro e 4 Quarto', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Praia dos Nativos - Estr. de Trancoso , Porto Seguro, Brasil',
    desc: "Inspirada na cultura ind??gena Patax??, com caracter??sticas de casas gregas, e um toque praiano do sul da Bahia, a casa fica localizada ?? 950 m do Quadrado de Trancoso e 1150 m da Praia dos Nativos. Conta com 4 su??tes, sala de estar espa??osa, cozinha equipada, escrivaninha Home-Office e wi-fi r??pido. Cada su??te possui ar condicionado e 3 delas entradas independentes e varandas. Garagem privativa, amplo jardim com ??rvores nativas, deck de madeira com mesa de jantar, ??rea de relaxamento, churrasqueira e uma ducha rustica externa. Tudo para conhecer Trancoso em alto padr??o.",
  },
  {
    img: CP,
    key: String(Math.random()),
    name: "Casa Penelope",
    rate: "3 avalia????es",
    price: 2000,
    ocupacao: 10,
    quartos: 4,
    banheiros: 4,
    camas: 6,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 1 Cama king-size, 2 Cama queen size e 2 Sof?? cama', '4 Banheiro e 4 Quarto', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, 12 , Trancoso, Brasil',
    desc: "localizada ao lado do estacionamento do Capim Santo , antes da ladeira que desce para o rio Trancoso acomoda at?? 10 pessoas ",
  },
  {
    img: IE,
    key: String(Math.random()),
    name: "Iemanj?? Beach House",
    rate: "3 avalia????es",
    price: 2200,
    ocupacao: 6,
    quartos: 2,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '1 Cama de casal, 1 Cama king-size, 1 Cama king-size ', '3 Banheiro e 2 Quarto', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, 12 , Trancoso, Brasil',
    desc: "Estr. do Rio Verde , Porto Seguro, Brasil",
  },
  {
    img: CM,
    key: String(Math.random()),
    name: "Casa dos Macacos",
    rate: "3 avalia????es",
    price: 1700,
    ocupacao: 10,
    quartos: 5,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Entretenmento', 'Dormit??rios', 'Habita????es', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Mesa de bilhar, Wi-Fi Internet e TV (Antena)', '5 Cama de casal', '5 Banheiro e 5 Quarto', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, 12 , Trancoso, Brasil',
    desc: "Estr. dos Macacos , Porto Seguro, Brasil",
  },
  {
    img: CC,
    key: String(Math.random()),
    name: "Casa Corais do Sul",
    rate: "3 avalia????es",
    price: 950,
    ocupacao: 10,
    quartos: 5,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, 12 , Trancoso, Brasil',
    desc: "A casa possui quatro su??tes privativas com ar condicionado, 2 banheiros, cozinha gourmet,  sala com vista para o jardim, piscina grande,  churrasqueira na varanda, redes e pufs completam o ambiente externo. Todos os ambientes possuem rede wi-fi. Localizada no condom??nio Coqueiral que fica a 10 minutos de carro do Quadrado e 12 minutos de carro da praia dos Coqueiros. Este ?? o local ?? ideal para quem procura privacidade, tranquilidade  e conforto em ambiente descontra??do e  intimista preparado para fazer que suas f??rias sejam especiais.    ",
  },
  {
    img: CU,
    key: String(Math.random()),
    name: "Casa Ubirajara",
    rate: "3 avalia????es",
    price: 9000,
    ocupacao: 12,
    quartos: 4,
    banheiros: 5,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Rua Jo??o Vieira , Trancoso, Brasil??',
    desc: "A Casa localizada em um terreno de 600m??. Fica a 400m do Quadrado de Trancoso e 800 m da praia. Em 20 minutos de caminhada voc?? consegue chegar ?? Praia dos Nativos. A hospedagem ?? ideal para fam??lia e grupo de amigos. ??? Acomoda at?? 12 pessoas confortavelmente 04 su??tes com ar condicionado ??? Hidromassagem ??? Sala e cozinha equipadas",
  },
  {
    img: CMT,
    key: String(Math.random()),
    name: "Casa Makuna",
    rate: "3 avalia????es",
    price: 450,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habita????es', 'Dormit??rios', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', '3 Banheiro e 3 Quarto', '2 Cama de casal e 1 Cama queen size', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'R. Carlos Chagas, 774 , Porto Seguro, Brasil',
    desc: "Grande sala com cozinha americana, grande varanda, piscina de 10m x 4m , entrada com um port??o com interfone e com c??digo digital, casa completamente mobiliada, fechaduras da casa eletr??nica com c??digo, servi??o de recep????o das 8h-13h , ??gua, luz, internet- wifi, sky tv, servi??o de limpeza, troca de toalhas e roupas de cama ?? cada 3-4 dias, jardinagem e limpeza da piscina inclui??do no aluguel.",
  },
  {
    img: DG,
    key: String(Math.random()),
    name: "Dende",
    rate: "3 avalia????es",
    price: 600,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Manoel Alves dos Santos, 80, centro de trancoso , Trancoso, Brasil',
    desc: "O nosso espa??o disp??e de uma su??te e dois quartos com decora????o aconchegante, ideal para f??rias ou home office, desfrute de tudo o que Trancoso tem para oferecer!  Os nossos servi??os inclem  limpeza, garagem e wi-fi . Estamos situados no centro de Trancoso  munido de  restaurantes farm??cias bancos e supermercado, estamos perto do Quadrado de Trancoso (1 km) e da Praia dos Nativos (1.7km) estando em localiza????o perfeita para agradar a todos.",
  },
  {
    img: MR,
    key: String(Math.random()),
    name: "Casa Manga Rosa",
    rate: "4 avalia????es",
    price: 720,
    ocupacao: 6,
    quartos: 3,
    banheiros: 3,
    camas: 3,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habita????es', 'Dormit??rios', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', '3 Banheiro e 3 Quarto', '2 Cama de casal e 1 Cama queen size', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Praia dos Nativos - Estr. de Trancoso , Porto Seguro, Brasil',
    desc: "Casa Manga Rosa recentemente constru??da em um condom??nio fechado com seguran??a 24horas e estacionamento privativo dentro da casa, logo na entrada de Trancoso, a 150 m da rua principal, 2 km do Quadrado Hist??rico e cerca de 2,5 km das praias. A casa tem decora????o inspirada no estilo de vida de Trancoso, com ambientes abertos e super ventilados trazendo um ar tropical e aconchegante ao ambiente. Com 3 su??tes e uma piscina privativa livre de cloro com hidromassagem, onde o sol bate o dia inteiro,  estamos de portas abertas para receb??-los em grande estilo.",
  },
  {
    img: TC,
    key: String(Math.random()),
    name: "Vila Terra-Cota",
    rate: "4 avalia????es",
    price: 800,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Habita????es', 'Dormit??rios', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', '2 Banheiro e 2 Quarto', '1 Cama de casal, 1 Cama king-size, 1 Cama queen size e 2 Cama de solteiro', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Rua Alfa , Porto Seguro, Brasil',
    desc: "Propriedade composta por duas casas de dois andares e duas piscinas interligadas por port??o, no t??rreo de ambas as vilas  tem cozinha, sala, banheiro social e lavabo, no primeiro andar 2  su??tes com ar condicionado, sendo uma com varanda e vista para a piscina e mata nativa. Com ??rea de churrasco, servi??o de camareira di??rio e wi-fi  ofere??o esta propriedade inserida em condom??nio para sua temporada em trancoso, perto das praias mais famosas e do Quadrado de trancoso.",
  },
  {
    img: CH,
    key: String(Math.random()),
    name: "Casa Haselgrubler",
    rate: "4 avalia????es",
    price: 500,
    ocupacao: 8,
    quartos: 2,
    banheiros: 2,
    camas: 5,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: '32 Rua do Beco, 55 , Trancoso, Brasil',
    desc: "Charmosa casa no centro de Trancoso  com arvores de frutos e extenso jardim 2500 m2 e  dividida em 5 n??veis!    ",
  },
  {
    img: CS,
    key: String(Math.random()),
    name: "Casa Satinka",
    rate: "4 avalia????es",
    price: 3500,
    ocupacao: 8,
    quartos: 4,
    banheiros: 4,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: '32 Rua do Beco, 55 , Trancoso, Brasil',
    desc: "Localizada no complexo do rio da Barra Villa hotel  a Casa  ?? o ref??gio ideal para quem busca sossego e tranquilidade. Cercada de Mata nativa e regi??o de fal??sias, a casa disp??e de 4 lindas su??tes privativas sendo 3 su??tes no piso t??rreo e uma su??te no andar superior.    ",
  },
  {
    img: CMM,
    key: String(Math.random()),
    name: "Casa Potira",
    rate: "4 avalia????es",
    price: 2500,
    ocupacao: 10,
    quartos: 5,
    banheiros: 6,
    camas: 2,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'R. Alfa , Porto Seguro, Brasil',
    desc: "Casa localizada em condom??nio fechado pr??ximo a Rua Alfa, Trancoso.",
  },
  {
    img: CCA,
    key: String(Math.random()),
    name: "Casa Campestre",
    rate: "4 avalia????es",
    price: 1700,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'Pra??a S??o Jo??o Batista, 12 , Trancoso, Brasil',
    desc: "A  Casa possui 2 Su??tes no andar superior, cama queen de casal e 1 cama de solteiro em cada Su??te.",
  },
  {
    img: CA,
    key: String(Math.random()),
    name: "Casa de Praia Angatu",
    rate: "11 avalia????es",
    price: 810,
    ocupacao: 6,
    quartos: 2,
    banheiros: 2,
    camas: 4,
    imagens: ['https://l.icdbcdn.com/oh/1fb1713c-40a4-434f-af01-ede09e930702.jpg?w=1040', 'https://l.icdbcdn.com/oh/708d385e-034b-4aa6-8eb9-bddcf8a0414d.jpg?w=1040', 'https://l.icdbcdn.com/oh/d810e6cc-28c8-44c9-a210-9e148ca6544a.jpg?w=1040', 'https://l.icdbcdn.com/oh/b6a0e0ee-2a21-4ce7-ad3c-ffe6da7777df.jpg?w=1040', 'https://l.icdbcdn.com/oh/f17a579d-b158-4356-b54e-ced4a29a2083.jpg?w=1040', 'https://l.icdbcdn.com/oh/3ec61c80-3042-447f-abec-34fcc73eb75a.jpg?w=1040', 'https://l.icdbcdn.com/oh/86184020-b678-4052-b913-271fa9ee5826.jpg?w=1040', 'https://l.icdbcdn.com/oh/277ea835-c0b5-4d9a-9c4f-e8e670789ca5.jpg?w=1040', 'https://l.icdbcdn.com/oh/1b7e45dc-6f88-4c7a-a21e-2655c13509e3.jpg?w=1040', 'https://l.icdbcdn.com/oh/08fbea5f-e470-42d9-85b1-12ceb7a04653.jpg?w=1040', 'https://l.icdbcdn.com/oh/a7f21b45-7f13-431c-8923-e3fef0e42464.jpg?w=1040', 'https://l.icdbcdn.com/oh/be56c7b7-0e83-440f-87d0-edd857c23e67.jpg?w=1040', 'https://l.icdbcdn.com/oh/d5a9081f-4cc6-4cf1-9d10-e8db2190f2fe.jpg?w=1040', 'https://l.icdbcdn.com/oh/32b080ca-1b0c-4e5e-aa12-2db7e94de967.jpg?w=1040', 'https://l.icdbcdn.com/oh/24b930b8-5df0-4d4e-b02c-93ba9853732d.jpg?w=1040', 'https://l.icdbcdn.com/oh/2d197cd1-5a60-4639-a8e5-f4743b3056d6.jpg?w=1040', 'https://l.icdbcdn.com/oh/7a36e890-24f7-4dff-95f8-a49fa206f6e2.jpg?w=1040', 'https://l.icdbcdn.com/oh/062f3369-0a8d-44ca-873a-2c126148d04a.jpg?w=1040', 'https://l.icdbcdn.com/oh/f5391e8d-8273-48e0-a71a-c918193914da.jpg?w=1040'],
    destaques: ['Estacionamento', 'Wi-Fi Internet'],
    servicostitle: ['Exterior', 'Lavanderia', 'Sanit??rio', 'Estacionamento', 'Diversos', 'Mais informa????es'],
    servicosdesc: [
      'Privado Jardim, 1 Privado Varanda e 1 Privado Terra??o', 'M??quina de lavar roupa', 'Itens essenciais, Toalhas e Hidromassagem', 'Estacionamento Inclu??do', 'Wi-Fi Internet e TV (Antena)', 'Privado Varanda', 'Crian??as bem-vindas, Governanta inclu??da, Adequado para pessoas idosas ou doentes e Acess??vel para cadeiras de rodas'
    ],
    regras: ['Governanta inclu??da', 'Animais de estima????o bem-vindos'],
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
      '0% reembols??ve, caso seja cancelado depois.'
    ],
    location: 'R. Condom??nio Recanto das P??rolas, 33 , Vera Cruz, Brasil',
    desc: "A Casa Angatu Tal como o significado do nome da nossa pousada, queremos dar-lhe as Boas-vindas a este nosso pequeno para??so na ilha de Itaparica. Localizada ?? beira-mar na praia de Aratuba, na parte mais tranquila da ilha que ?? conhecida pelas suas piscinas naturais de ??guas transl??cidas e mornas. Aqui pode aproveitar a simplicidade e a beleza da natureza, para relaxar ou optar por diversas actividades. O Ambiente Perfeito A nossa casa, com decora????o simples mas charmosa, possu?? o necess??rio para que se sinta confort??vel. Usufrua da ampla sala com vista panor??mica para a praia. A escolha ?? sua, pode contemplar o mar, ler na rede embalado pela brisa ou organizar actividades com o seu grupo de amigos. Uma master su??te superior vista mar, quatro su??tes vista jardim com entradas independentes proporcionam a privacidade que precisa. Decoradas com elementos naturais que remetem para a paisagem envolvente, apostamos no conforto como convite ao repouso. Itaparica a maior ilha da Bahia de Todos os Santos Ficou famosa como zona balnearia de repouso devido ??s suas bonitas praias e ?? ??gua mineral que jorra da Fonte da Bica. Cercada por recifes de corais ?? banhada pelo mar de um azul cristalino, tranquilo e morno. Possuindo uma exuberante vegeta????o de manguezais e coqueirais e um clima fant??stico o ano inteiro, torna-se por isso um bom convite em qualquer ocasi??o. Venha conhecer a ilha onde nasceu Jo??o Ubaldo Ribeiro, viver sua simplicidade de costumes, percorrer as ruas de paralelep??pedos com seus tradicionais e preservados casar??es centen??rios. Caminhe nas praias observando os marisqueiros apanhando chumbinhos e lambretas, os pescadores puxando as redes, tome um banho de mar no por do sol e espere as primeiras estrelas surgirem no c??u. Jante num dos restaurantes ???P?? na Areia??? sempre abastecidos de fresco pescado e frutos do mar, conviva com os locais que aproveitam a frescura da brisa enquanto a lua se reflete no mar..",
  },
];

const Restaurantes = [
  {
    img: CS,
    key: String(Math.random()),
    name: "Capim Santo",
    rate: "1.674 avalia????es",
    price: "$$$$",
    desc: "Brasileira",
  },
  {
    img: RR,
    key: String(Math.random()),
    name: "Restaurante Rabanete",
    rate: "846 avalia????es",
    price: "$$$",
    desc: "Brasileira",
  },
  {
    img: HSJ,
    key: String(Math.random()),
    name: "Hamburgueria S??o Jo??o",
    rate: "155 avalia????es",
    price: "$$$",
    desc: "Pizza",
  },
  {
    img: LC,
    key: String(Math.random()),
    name: "La Cevicheria",
    rate: "319 avalia????es",
    price: "$$$",
    desc: "Peruana, Latina",
  },
  {
    img: CA,
    key: String(Math.random()),
    name: "A Creperia",
    rate: "202 avalia????es",
    price: "$$",
    desc: "Francesa, Europa",
  },
];

const RestaurantesPraia = [
  {
    img: UV,
    key: String(Math.random()),
    name: "Uiki Vila ?? Beira-Mar",
    rate: "500 avalia????es",
    price: "$$$",
    desc: "Brasileira",
  },
  {
    img: SB,
    key: String(Math.random()),
    name: "Sunrise Beach Club",
    rate: "75 avalia????es",
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
    desc: "??reas hist??ricas para caminhadas.",
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
              Acomoda????es
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
                ? "Uma experi??ncia icr??vel te espera"
                : restaurantes
                  ? "Pois comer ?? fundamental"
                  : "A casa dos seus sonhos te espera"}
          </Text>
          <Text style={{ color: "#333", fontSize: 20, width: "80%" }}>
            {acomodacoes
              ? "Encontre a sua estadia perfeita em Trancoso"
              : passeios
                ? "Passeios incr??veis com os melhores guias"
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
            Confira as propriedades que ainda est??o disponiveis para o reveillon
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
          Achamos que voc?? vai gostar dessas casas para uma escapada da cidade.
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
                  Lugares para ver, maneiras de explorar e experi??ncias t??picas.
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
                  Praias incr??veis
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
                  {"Que tal um almo??o na praia? ????"}
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
                  Selecionamos para voc??
              </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    color: "#000",
                    fontSize: 16,
                    width: "70%",
                  }}
                >
                  Nossa sele????o de restaurantes.
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
