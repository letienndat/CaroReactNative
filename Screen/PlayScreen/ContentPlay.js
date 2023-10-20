import { StyleSheet, View } from "react-native";
import Box from "./Box";
import { heightRedundant, useApp, widthRedundant } from "../../App";

export default function ContentPlay(props) {
	const { items, setItems } = useApp();

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
