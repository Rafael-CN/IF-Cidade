import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Screens } from "./screens";
import { Theme } from "./common/Theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as NavigationBar from "expo-navigation-bar";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	NavigationBar.setBackgroundColorAsync(Theme.primaryLight);
	NavigationBar.setButtonStyleAsync("dark");

	return (
		<NavigationContainer>
			<Tab.Navigator
				activeColor={Theme.dark}
				inactiveColor={Theme.dark}
				barStyle={{ backgroundColor: Theme.primaryLight }}
				activeIndicatorStyle={{ backgroundColor: "rgba(0,50,0,0.2)" }}
			>
				{Screens.map((s, i) => {
					return (
						<Tab.Screen
							key={i}
							name={s.screen.name}
							component={s.screen}
							options={{
								tabBarIcon: ({ color }) => (
									<Icon name={s.icon} color={color} size={26}></Icon>
								),
							}}
						></Tab.Screen>
					);
				})}
			</Tab.Navigator>
		</NavigationContainer>
	);
}
