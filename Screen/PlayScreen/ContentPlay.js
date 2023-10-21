import { StyleSheet, View } from "react-native";
import Box from "./Box";
import { useAppContext } from "../../AppContext";
import { heightRedundant, widthRedundant } from "../../info/info";

export default function ContentPlay(props) {
	const { items, setItems } = useAppContext();

	return (
		<View
			style={[
				styles.container,
				{
					marginTop: heightRedundant / 2,
					marginBottom: heightRedundant / 2,
					marginLeft: widthRedundant / 2,
					marginRight: widthRedundant / 2,
				},
			]}
		>
			{items
				.flatMap((item) => [...item])
				.map((item) => {
					return (
						<Box
							key={item.id}
							id={item.id}
							win={item.win}
							clickFirst={props.clickFirst}
							onClickFirst={props.onClickFirst}
							items={items}
							onItems={setItems}
							focusBox={props.focusBox}
							onFocusBox={props.onFocusBox}
						/>
					);
				})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		flexGrow: 1,
		backgroundColor: "#fff",
	},
});
