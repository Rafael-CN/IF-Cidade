import { StyleSheet, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CText from "../components/CText";

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

	const color = colors[theme];
	const fontSize = 20;

	return (
		<View
			style={[
				styles.info,
				{ backgroundColor: color.light, alignSelf: alignSelf },
			]}
		>
			<CText color={color.main} fs={fontSize * 0.7}>
				{title}
			</CText>
			<View style={styles.infoContent}>
				<Icon
					style={{ color: color.main, fontSize: fontSize }}
					name={icon}
				></Icon>
				<CText color={color.main} fs={fontSize} fw={700}>
					{value}
				</CText>
			</View>
		</View>
	);
}

function IBGE() {
	const data = [
		{ icon: "map", title: "Área territorial", value: "4.090 km²" },
		{ icon: "account-group", title: "População", value: "117.938" },
		{ icon: "school", title: "Escolarização", value: "97,6%" },
		{ icon: "chart-line-variant", title: "IDHM", value: "0,740" },
		{ icon: "cash", title: "PIB per capita", value: "R$ 30.846" },
		{ icon: "arrow-up-circle", title: "Altitude", value: "212m" },
		{ icon: "calendar", title: "Nascimento", value: "06/1846" },
		{
			icon: "map-marker-radius",
			title: "Densidade demográfica",
			value: "28,83 hab/km²",
		},
		{ icon: "account", title: "Gentílico", value: "Bageense" },
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
		rowGap: 15,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},

	info: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 15,
	},

	infoContent: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
		gap: 20,
	},
});

export default new Route(IBGE, "chart-donut");
