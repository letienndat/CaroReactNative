import { StyleSheet, View } from "react-native";
import ContentStart from "./ContentStart";
import FooterStart from "./FooterStart";

const StartScreen = () => {
	return (
		<View style={styles.container}>
			<ContentStart />
			<FooterStart />
		</View>
	);
};

export default StartScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
