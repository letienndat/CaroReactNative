import { faO, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Player(props) {

	return (
		<View style={styles.container}>
			<Image
				style={[styles.avatarPlayer, props.turn && { borderWidth: 2 }]}
				source={props.avatarPlayer}
			></Image>
			<View style={styles.nameAndTime}>
				<View style={styles.nameAndIcon}>
					<Text style={styles.name}>
						{props.namePlayer.toUpperCase()}
					</Text>
					<FontAwesomeIcon
						size={props.turnFirst ? 15 : 13}
						icon={props.turnFirst ? faXmark : faO}
						color={props.turnFirst ? "red" : "#333"}
					/>
				</View>
				<Text style={styles.time}>{props.timePlayer}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
		height: 50,
		paddingLeft: 10,
		marginTop: 15,
		marginBottom: 15,
	},
	avatarPlayer: {
		width: 50,
		height: 50,
		borderRadius: 20,
		borderColor: "red",
	},
	nameAndTime: {
		flex: 1,
		flexDirection: "column",
		height: 50,
		justifyContent: "center",
	},
	nameAndIcon: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
	},
	time: {
		fontSize: 14,
		fontWeight: "600",
		color: "#fff",
	},
});
