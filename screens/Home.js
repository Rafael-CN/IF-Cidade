import { Image, StyleSheet, View } from "react-native";
import { Route } from "../common/Screen";
import { Theme } from "../common/Theme";
import CText from "../components/CText";

function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.intro}>
				<CText style={styles.welcome}>
					Bem vindo a <CText fw={700}>Bagé</CText>
				</CText>
				<CText style={styles.subtitle}>Explore a rainha da fronteira</CText>

				<View style={styles.tagRegion}>
					<View style={[styles.tag, { backgroundColor: Theme.secondaryLight }]}>
						<CText color={Theme.secondary} fw={800}>
							Rio grande do sul
						</CText>
					</View>

					<View style={[styles.tag, { backgroundColor: Theme.primaryLight }]}>
						<CText color={Theme.primary} fw={800}>
							Brasil
						</CText>
					</View>
				</View>
			</View>

			<View style={styles.info}>
				<CText color={Theme.secondary} style={styles.infoText}>
					Berço da Revolução Farroupilha e lar da charmosa Catedral
					Metropolitana, Bagé encanta com sua rica história, cultura vibrante e
					paisagens
				</CText>
			</View>

			<View
				style={[
					styles.info,
					{ backgroundColor: Theme.primaryLight, alignItems: "center" },
				]}
			>
				<Image
					style={styles.infoImage}
					source={require("../assets/brasao.png")}
				></Image>
				<CText color={Theme.primary} style={styles.infoTitle}>
					Brasão
				</CText>
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

	tagRegion: { marginTop: 15, flexDirection: "row", gap: 15 },

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
		marginTop: 25,
		padding: 20,
		borderRadius: 10,
		backgroundColor: Theme.secondaryLight,
	},

	infoText: {
		fontSize: 15,
		lineHeight: 25,
		fontWeight: "700",
	},

	infoTitle: {
		fontSize: 15,
		fontWeight: "800",
		marginTop: 15,
	},

	infoImage: {
		width: 200,
		height: 230,
	},
});

export default new Route(Home, "home");
