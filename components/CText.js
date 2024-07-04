import { Text } from "react-native";

function CText({ children, style = {}, fs, fw, color }) {
	return (
		<Text
			style={[
				style,
				{
					fontSize: fs || style.fontSize,
					fontWeight: fw || style.fontWeight,
					color: color || style.color,
				},
			]}
		>
			{children}
		</Text>
	);
}

export default CText;
