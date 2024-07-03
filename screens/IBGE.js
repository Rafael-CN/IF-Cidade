import { StyleSheet, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";

function IBGE() {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.background,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default new Route(IBGE, "chart-donut");
