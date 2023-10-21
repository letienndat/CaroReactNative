import {
	BackHandler,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import iconCaro from "../../images/icon_caro.png";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import avatarPlayer1 from "../../images/player_1.png";
import avatarPlayer2 from "../../images/player_2.png";
import { NAME_PLAYER_1, NAME_PLAYER_2 } from "@env";
import { useAppContext } from "../../AppContext";
import { countBoxHeight, countBoxWidth } from "../../info/info";

const ContentStart = () => {
	const nav = useNavigation();
	const {
		isStart,
		setIsStart,
		setTurn,
		setItems,
		setElementX,
		setElementO,
		turnFirst,
		setTurnFirst,
		setUsers,
		setIsEnd,
	} = useAppContext();

	const handleClickStart = () => {
		nav.navigate("Play");
		setIsStart(!1);
		setIsEnd(!1);
		setTurnFirst((turnFirst) => (turnFirst === 1 ? 2 : 1));
		setElementX([]);
		setElementO([]);
		setItems((items) => {
			return [
				...Array(countBoxHeight)
					.fill(0)
					.map((item, i) =>
						Array(countBoxWidth)
							.fill(0)
							.map((_item, j) => ({
								id: `${i + 1}_${j + 1}`,
								status: undefined,
								win: false,
							}))
					),
			];
		});
		setUsers((user) => [
			{
				id: 1,
				avatar: avatarPlayer1,
				name: NAME_PLAYER_1,
				time: "∞",
				score: 0,
				e: user[0].e === "x" ? "o" : "x",
			},
			{
				id: 2,
				avatar: avatarPlayer2,
				name: NAME_PLAYER_2,
				time: "∞",
				score: 0,
				e: user[1].e === "x" ? "o" : "x",
			},
		]);
	};

	useEffect(() => {
		setTurn(turnFirst);
	}, [turnFirst]);

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={iconCaro}></Image>
			{isStart && (
				<TouchableOpacity
					style={styles.button}
					onPress={() => nav.navigate("Play")}
				>
					<Text style={styles.text}>REMUSE</Text>
				</TouchableOpacity>
			)}
			<TouchableOpacity style={styles.button} onPress={handleClickStart}>
				<Text style={styles.text}>START NOW</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => BackHandler.exitApp()}
			>
				<Text style={styles.text}>QUIT</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContentStart;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
	},
	image: {
		width: 150,
		height: 150,
		marginBottom: 10,
	},
	button: {
		width: 120,
		backgroundColor: "#267BFB",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 5,
		paddingBottom: 5,
	},
	text: {
		fontSize: 15,
		fontWeight: 400,
		color: "#fff",
	},
});
