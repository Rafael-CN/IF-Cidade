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

	const infoStyle = StyleSheet.create({
		info: {
			backgroundColor: colors[theme].light,
			paddingHorizontal: 20,
			paddingVertical: 15,
			borderRadius: 20,
			alignSelf: alignSelf,
		},

		infoTitle: {
			color: colors[theme].main,
			fontSize: 18,
		},

		infoContent: {
			flexDirection: "row",
			alignItems: "center",
			marginTop: 5,
			gap: 20,
		},

		infoText: {
			color: colors[theme].main,
			fontSize: 25,
			fontWeight: "700",
		},

		infoIcon: {
			color: colors[theme].main,
			fontSize: 25,
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
	return (
		<View style={styles.container}>
			<IBGEInfo title="Área territorial" icon="map" value="4.090 km²" />
			<IBGEInfo
				theme="secondary"
				title="População"
				icon="account-group"
				value="117.938"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.background,
		paddingHorizontal: 30,
		paddingTop: 60,
		gap: 20,
	},
});

export default new Route(IBGE, "chart-donut");
