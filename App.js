import StartScreen from "./Screen/StartScreen/StartScreen";
import PlayScreen from "./Screen/PlayScreen/PlayScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createContext, useContext, useState } from "react";
import { Dimensions } from "react-native";
import avatarPlayer1 from "./images/player_1.png";
import avatarPlayer2 from "./images/player_2.png";
import { NAME_PLAYER_1, NAME_PLAYER_2 } from "@env";

const AppContex = createContext();

export const { width, height } = Dimensions.get("screen");
export const widthMax = width - 30;
export const heightMax = height - 210;
export const widthBox = 30;
export const heightBox = 30;
export const countBoxWidth = Math.floor(widthMax / widthBox);
export const countBoxHeight = Math.floor(heightMax / heightBox);
export const widthRedundant = widthMax - countBoxWidth * widthBox;
export const heightRedundant = heightMax - countBoxHeight * heightBox;
export const itemsGenerate = [
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

export default function App() {
	const Stack = createStackNavigator();
	const [isStart, setIsStart] = useState(!1);
	const [isEnd, setIsEnd] = useState(!1);
	const [turnFirst, setTurnFirst] = useState(2);
	const [turn, setTurn] = useState(2);
	const [items, setItems] = useState([...itemsGenerate]);
	const [elementX, setElementX] = useState([]);
	const [elementO, setElementO] = useState([]);
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);
	const [users, setUsers] = useState([
		{
			id: 1,
			avatar: avatarPlayer1,
			name: NAME_PLAYER_1,
			time: "∞",
			score: 0,
			e: "o",
		},
		{
			id: 2,
			avatar: avatarPlayer2,
			name: NAME_PLAYER_2,
			time: "∞",
			score: 0,
			e: "x",
		},
	]);

	return (
		<AppContex.Provider
			value={{
				isStart,
				setIsStart,
				turn,
				setTurn,
				items,
				setItems,
				elementX,
				setElementX,
				elementO,
				setElementO,
				scoreO,
				setScoreO,
				scoreX,
				setScoreX,
				turnFirst,
				setTurnFirst,
				users,
				setUsers,
				isEnd,
				setIsEnd,
			}}
		>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Start"
						component={StartScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Play"
						component={PlayScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppContex.Provider>
	);
}

export function useApp() {
	return useContext(AppContex);
}
