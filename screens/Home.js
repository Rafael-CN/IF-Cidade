import { StyleSheet, Text, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";

function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.intro}>
				<Text style={styles.welcome}>
					Bem vindo a <Text style={{ fontWeight: "700" }}>Bagé</Text>
				</Text>
				<Text style={styles.subtitle}>Explore a rainha da fronteira</Text>

				<View style={{ marginTop: 15, flexDirection: "row", gap: 15 }}>
					<View style={[styles.tag, { backgroundColor: Theme.secondaryLight }]}>
						<Text style={[styles.tagText, { color: Theme.secondary }]}>
							Rio grande do sul
						</Text>
					</View>

					<View style={[styles.tag, { backgroundColor: Theme.primaryLight }]}>
						<Text style={[styles.tagText, { color: Theme.primary }]}>
							Brasil
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.info}>
				<Text style={styles.infoText}>
					Berço da Revolução Farroupilha e lar da charmosa Catedral
					Metropolitana, Bagé encanta com sua rica história, cultura vibrante e
					paisagens
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.background,
		alignItems: "center",
		paddingHorizontal: 30,
		paddingTop: 60,
	},

	intro: {
		width: "100%",
		justifyContent: "flex-start",
	},

	welcome: {
		fontSize: 30,
		color: Theme.dark,
	},

	subtitle: {
		fontSize: 20,
		fontWeight: "300",
		marginTop: 5,
		color: Theme.dark,
	},

	tag: {
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		alignSelf: "flex-start",
	},

	tagText: {
		fontWeight: "800",
	},

	info: {
		width: "100%",
		marginTop: 30,
		padding: 20,
		borderRadius: 10,
		backgroundColor: Theme.primaryLight,
	},

	infoText: {
		fontSize: 15,
		lineHeight: 25,
		fontWeight: "700",
		color: Theme.primary,
	},
});

export default new Route(Home, "home");
