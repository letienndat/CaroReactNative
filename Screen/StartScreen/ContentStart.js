import { BackHandler, Button, Image, StyleSheet, View } from "react-native";
import iconCaro from "../../images/icon_caro.png";
import { useNavigation } from "@react-navigation/native";
import { countBoxHeight, countBoxWidth, useApp } from "../../App";
import { useEffect } from "react";
import avatarPlayer1 from "../../images/player_1.png";
import avatarPlayer2 from "../../images/player_2.png";
import { NAME_PLAYER_1, NAME_PLAYER_2 } from "@env";

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
	} = useApp();

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
				<Button
					title="REMUSE"
					onPress={() => nav.navigate("Play")}
				></Button>
			)}
			<Button title="START NOW" onPress={handleClickStart}></Button>
			<Button title="QUIT" onPress={() => BackHandler.exitApp()}></Button>
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
	},
	image: {
		width: 150,
		height: 150,
		marginBottom: 10,
	},
});
