import { StyleSheet, Text, View } from "react-native";

const FooterStart = () => (
	<View style={styles.container}>
		<Text>Copyright by &lt;3</Text>
	</View>
);

export default FooterStart;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingBottom: 30,
	},
});
