import { countBoxHeight, countBoxWidth } from "../info/info";

export const handle = (target, arr) => {
	const [a, b] = target.split("_");
	target = [parseInt(a), parseInt(b)];
	arr = convert(arr);
	arr.sort((a, b) => {
		if (a[0] > b[0]) return 1;
		if (a[0] === b[0]) {
			if (a[1] > b[1]) return 1;
			if (a[1] < b[1]) return -1;
		}
		return -1;
	});

	const resHor = horizontal(target, arr);
	const resVer = vertical(target, arr);
	const resCrossR = crossRight(target, arr);
	const resCrossL = crossLeft(target, arr);

	if (resHor.status) {
		return revert(resHor.data);
	}
	if (resVer.status) {
		return revert(resVer.data);
	}
	if (resCrossR.status) {
		return revert(resCrossR.data);
	}
	if (resCrossL.status) {
		return revert(resCrossL.data);
	}

	return undefined;
};

export const checkEvent = (arr1, arr2) => {
	return arr1.length + arr2.length + 1 === countBoxWidth * countBoxHeight;
};

const convert = (arr) => {
	return arr.map((e) => {
		const [a, b] = e.split("_");
		return [parseInt(a), parseInt(b)];
	});
};

const horizontal = (target, arr) => {
	let count = 0;
	let data = [];
	for (let i = -1; i >= -4; --i) {
		let a = arr.find((e) => e[0] === target[0] && e[1] === target[1] + i);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}
	for (let i = 0; i <= 4; ++i) {
		let a = arr.find((e) => e[0] === target[0] && e[1] === target[1] + i);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}

	return count >= 5
		? {
				status: !0,
				data,
		  }
		: {
				status: !1,
		  };
};

const vertical = (target, arr) => {
	let count = 0;
	let data = [];
	for (let i = -1; i >= -4; --i) {
		let a = arr.find((e) => e[0] === target[0] + i && e[1] === target[1]);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}
	for (let i = 0; i <= 4; ++i) {
		let a = arr.find((e) => e[0] === target[0] + i && e[1] === target[1]);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}

	return count >= 5
		? {
				status: !0,
				data,
		  }
		: {
				status: !1,
		  };
};

const crossRight = (target, arr) => {
	let count = 0;
	let data = [];
	for (let i = -1; i >= -4; --i) {
		let a = arr.find(
			(e) => e[0] === target[0] + i && e[1] === target[1] + i
		);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}
	for (let i = 0; i <= 4; ++i) {
		let a = arr.find(
			(e) => e[0] === target[0] + i && e[1] === target[1] + i
		);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}

	return count >= 5
		? {
				status: !0,
				data,
		  }
		: {
				status: !1,
		  };
};

const crossLeft = (target, arr) => {
	let count = 0;
	let data = [];
	for (let i = -1; i >= -4; --i) {
		let a = arr.find(
			(e) => e[0] === target[0] - i && e[1] === target[1] + i
		);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}
	for (let i = 0; i <= 4; ++i) {
		let a = arr.find(
			(e) => e[0] === target[0] - i && e[1] === target[1] + i
		);
		if (a) {
			count++;
			data.push(a);
		} else break;
	}

	return count >= 5
		? {
				status: !0,
				data,
		  }
		: {
				status: !1,
		  };
};

const revert = (arr) => {
	return arr.map((e) => `${e[0]}_${e[1]}`);
};

const wait = (ml = 0) => {
	return new Promise((resolve, reject) => {
		return setTimeout(resolve, ml);
	});
};

export const prevSecond = async (second) => {
	await wait(1000);

	if (second === 0) {
		return {
			status: false,
		};
	}
	return {
		status: true,
		data: second - 1,
	};
};

export const formatSecond = (second) => {
	return "00:" + `${second < 10 ? "0" + second : second}`;
};
