import { View } from "react-native";

export class Route {
	screen = () => {
		return <View></View>;
	};
	icon = "";

	constructor(screen, icon) {
		this.screen = screen;
		this.icon = icon;
	}
}
