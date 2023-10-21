import { faO, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { checkEvent, handle } from "../../service/handle";
import { useAppContext } from "../../AppContext";
import { heightBox, widthBox } from "../../info/info";

export default function Box(props) {
	const {
		turn,
		setTurn,
		elementX,
		setElementX,
		elementO,
		setElementO,
		setItems,
		users,
		setUsers,
		setIsEnd,
	} = useAppContext();

	const checkBox = props.items
		.flatMap((item) => [...item])
		.find((item) => item.id === props.id)["status"];

	const handleClick = () => {
		if (checkBox === undefined) {
			if (props.clickFirst === undefined) {
				props.onClickFirst(props.id);
			} else {
				if (props.id === props.clickFirst) {
					if (!checkEvent(elementX, elementO)) {
						if (users[turn - 1].e === "x") {
							setElementX((elementX) => {
								const res = handle(props.id, [
									...elementX,
									props.id,
								]);
								if (res) {
									setUsers((users) => {
										users[turn - 1].score += 1;

										return users;
									});
									setItems((items) => {
										return items.map((item) => {
											return item.map((_item) => {
												if (res.includes(_item.id)) {
													_item.win = true;
												}
												return _item;
											});
										});
									});
									setIsEnd(!0);
								} else {
									setTurn((turn) => (turn === 1 ? 2 : 1));
								}
								return [...elementX, props.id];
							});
						} else if (users[turn - 1].e === "o") {
							setElementO((elementO) => {
								const res = handle(props.id, [
									...elementO,
									props.id,
								]);
								if (res) {
									setUsers((users) => {
										users[turn - 1].score += 1;

										return users;
									});
									setItems((items) => {
										return items.map((item) => {
											return item.map((_item) => {
												if (res.includes(_item.id)) {
													_item.win = true;
												}
												return _item;
											});
										});
									});
									setIsEnd(!0);
								} else {
									setTurn((turn) => (turn === 1 ? 2 : 1));
								}
								return [...elementO, props.id];
							});
						}
						props.onItems((items) => {
							return items.map((item) => {
								return item.map((_item) => {
									if (_item.id === props.id) {
										_item.status = turn;
									}
									return _item;
								});
							});
						});
					}
					props.onFocusBox(props.id);
				} else {
					props.onClickFirst(props.id);
				}
			}
		}
	};

	return (
		<TouchableOpacity activeOpacity={1} onPress={handleClick}>
			<View
				style={[
					styles.container,
					{ width: widthBox, height: heightBox },
					props.clickFirst === props.id && {
						backgroundColor: "#BEADFA",
					},
					props.focusBox === props.id && {
						backgroundColor: "#B3A492",
					},
					props.win && { backgroundColor: "#6A9C89" },
				]}
			>
				{checkBox !== undefined && (
					<FontAwesomeIcon
						size={users[checkBox - 1].e === "x" ? 30 : 25}
						icon={users[checkBox - 1].e === "x" ? faXmark : faO}
						color={users[checkBox - 1].e === "x" ? "red" : "#333"}
					/>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FEFEFE",
		borderColor: "#333",
		borderWidth: 0.5,
		justifyContent: "center",
		alignItems: "center",
	},
});
