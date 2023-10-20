import { Button, StyleSheet, Text, View } from "react-native";
import Player from "./Player";
import ContentPlay from "./ContentPlay";
import { useEffect, useState } from "react";
import { countBoxHeight, countBoxWidth, useApp } from "../../App";
import { useNavigation } from "@react-navigation/native";

export default function PlayScreen() {
	const {
		setIsStart,
		turnFirst,
		users,
		turn,
		isEnd,
		setTurnFirst,
		setElementX,
		setElementO,
		setIsEnd,
		setItems,
		setUsers,
		setTurn,
	} = useApp();
	const [clickFirst, setClickFirst] = useState(undefined);
	const nav = useNavigation();

	const handleClickTryAgain = () => {
		setIsEnd(!1);
		setTurnFirst((turnFirst) => (turnFirst === 1 ? 2 : 1));
		setElementX([]);
		setElementO([]);
		setClickFirst(undefined);
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
		setUsers((users) => {
			users[0].e = users[0].e === "x" ? "o" : "x";
			users[1].e = users[1].e === "x" ? "o" : "x";

			return users;
		});
	};

	const handleClickBackToMenu = () => {
		nav.navigate("Start");
		setIsStart(!1);
		setIsEnd(!0);
	};

	useEffect(() => {
		setIsStart(!0);
	}, []);

	useEffect(() => {
		setTurn(turnFirst);
	}, [turnFirst]);

	return (
		<>
			<View style={styles.container}>
				<Player
					avatarPlayer={users[1].avatar}
					namePlayer={users[1].name}
					timePlayer={users[1].time}
					turnFirst={turnFirst === users[1].id}
					turn={turn === 2}
				/>
				<ContentPlay
					clickFirst={clickFirst}
					onClickFirst={setClickFirst}
				/>
				<Player
					avatarPlayer={users[0].avatar}
					namePlayer={users[0].name}
					timePlayer={users[0].time}
					turnFirst={turnFirst === users[0].id}
					turn={turn === 1}
				/>
			</View>
			{isEnd && (
				<View style={styles.faded}>
					<Text style={styles.title}>END GAME</Text>
					<Text style={styles.name}>{users[1].name.toUpperCase()}</Text>
					<View style={styles.score}>
						<Text style={styles.scoreNumber}>{users[1].score}</Text>
						<Text style={styles.vs}>-</Text>
						<Text style={styles.scoreNumber}>{users[0].score}</Text>
					</View>
					<Text style={styles.name}>{users[0].name.toUpperCase()}</Text>
					<View style={styles.button}>
						<Button
							color="#FDF0F0"
							title="TRY AGAIN"
							onPress={handleClickTryAgain}
						></Button>
						<Button
							color="#FDF0F0"
							title="BACK TO MENU"
							onPress={handleClickBackToMenu}
						></Button>
					</View>
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#267BFB",
		padding: 15,
		paddingTop: 35,
		paddingBottom: 15,
	},
	faded: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		backgroundColor: "rgba(142, 143, 250, 0.6)",
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#132043",
		marginBottom: 30,
	},
	name: {
		fontSize: 35,
		fontWeight: "bold",
		color: "#132043",
	},
	score: {
		flexDirection: "row",
		gap: 30,
		alignItems: "center",
	},
	scoreNumber: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#132043",
	},
	vs: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#132043",
	},
	button: {
		marginTop: 20,
	},
});
