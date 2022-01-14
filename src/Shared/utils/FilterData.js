export const filterData = (data, type) => {
	return data.filter(elem => {
		return elem.type === type
	})
}