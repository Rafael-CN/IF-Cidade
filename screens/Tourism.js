import { StyleSheet, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";

function Tourism() {
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

export default new Route(Tourism, "map-marker");
