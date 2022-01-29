const incrementDecrement = (targetId, itemId, operator, itemCount) => {
	if (targetId === itemId) {
		if (operator === "+") {
			return itemCount + 1;
		} else {
			return itemCount - 1;
		}
	}
};

export default incrementDecrement;
