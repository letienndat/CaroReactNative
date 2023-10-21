import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View } from "react-native";

const FooterStart = () => (
	<View style={styles.container}>
		<Text style={styles.text}>© 2023, made with</Text>
		<FontAwesomeIcon icon={faHeart} color="red" />
	</View>
);

export default FooterStart;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
		paddingBottom: 30,
		gap: 4,
	},
	text: {
		paddingTop: 1.5,
	},
});
