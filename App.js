import StartScreen from "./Screen/StartScreen/StartScreen";
import PlayScreen from "./Screen/PlayScreen/PlayScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import avatarPlayer1 from "./images/player_1.png";
import avatarPlayer2 from "./images/player_2.png";
import { NAME_PLAYER_1, NAME_PLAYER_2 } from "@env";
import { AppContext } from "./AppContext";
import { itemsGenerate } from "./info/info";

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
		<AppContext.Provider
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
		</AppContext.Provider>
	);
}
