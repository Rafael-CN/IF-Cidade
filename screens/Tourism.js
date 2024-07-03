import { StyleSheet, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

function Tourism() {
  const markers = [
    {
      coordinate: {
        latitude: -31.334790925741668,
        longitude: -54.05380976335516,
      },
      title: "Parque do Gaúcho",
      description:
        "Parque municipal com área verde, lago e atividades ao ar livre.",
    },
    {
      coordinate: {
        latitude: -31.325609818876515,
        longitude: -54.10575285558909,
      },
      title: "Praça Esporte e Cultura",
      description:
        "Praça central com monumentos, área de lazer e eventos culturais.",
    },
    {
      coordinate: {
        latitude: -31.325179375520374,
        longitude: -54.10487144065978,
      },
      title: "Igreja Matriz Nossa Senhora Auxiliadora",
      description:
        "Igreja histórica com arquitetura neogótica e relevância cultural.",
    },
    {
      coordinate: {
        latitude: -31.33303367651962,
        longitude: -54.10029492887575,
      },
      title: "Museu Dom Diogo de Souza",
      description:
        "Museu com acervo histórico, artístico e cultural da região.",
    },
    {
      coordinate: {
        latitude: -31.347364152584532,
        longitude: -54.106449800352124,
      },
      title: "Ginásio Presidente Médici (Militão)",
      description:
        "Lugar excelente para passar o dia em contato com a natureza e praticar esportes",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: -31.328413857708384,
          longitude: -54.10810417364096,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {markers.map((m, i) => {
          return (
            <Marker
              key={i}
              coordinate={m.coordinate}
              title={m.title}
              description={m.description}
            ></Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default new Route(Tourism, "map-marker");
