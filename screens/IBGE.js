import { StyleSheet, Text, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function IBGEInfo({
  title,
  icon,
  value,
  theme = "primary",
  alignSelf = "flex-start",
}) {
  const colors = {
    primary: {
      main: Theme.primary,
      light: Theme.primaryLight,
    },
    secondary: {
      main: Theme.secondary,
      light: Theme.secondaryLight,
    },
  };

  const fontSize = 25;

  const infoStyle = StyleSheet.create({
    info: {
      backgroundColor: colors[theme].light,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 15,
      alignSelf: alignSelf,
    },

    infoTitle: {
      color: colors[theme].main,
      fontSize: fontSize * 0.7,
    },

    infoContent: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
      gap: 20,
    },

    infoText: {
      color: colors[theme].main,
      fontSize: fontSize,
      fontWeight: "700",
    },

    infoIcon: {
      color: colors[theme].main,
      fontSize: fontSize,
    },
  });

  return (
    <View style={infoStyle.info}>
      <Text style={infoStyle.infoTitle}>{title}</Text>
      <View style={infoStyle.infoContent}>
        <Icon style={infoStyle.infoIcon} name={icon}></Icon>
        <Text style={infoStyle.infoText}>{value}</Text>
      </View>
    </View>
  );
}

function IBGE() {
  const data = [
    { icon: "map", title: "Área territorial", value: "4.090 km²" },
    { icon: "account-group", title: "População", value: "117.938" },
    { icon: "school", title: "Escolarização", value: "97,6%" },
    {
      icon: "map-marker-radius",
      title: "Densidade demográfica",
      value: "28,83 hab/km²",
    },
    { icon: "chart-line-variant", title: "IDHM", value: "0,740" },
    { icon: "cash", title: "PIB per capita", value: "R$ 30.846" },
  ];

  return (
    <View style={styles.container}>
      {data.map((d, i) => {
        return (
          <IBGEInfo
            key={i}
            theme={i % 2 === 0 ? "primary" : "secondary"}
            title={d.title}
            icon={d.icon}
            value={d.value}
          ></IBGEInfo>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    paddingHorizontal: 30,
    paddingTop: 60,
    rowGap: 20,
    columnGap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default new Route(IBGE, "chart-donut");
