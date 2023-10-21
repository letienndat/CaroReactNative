import { Dimensions } from "react-native";

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
