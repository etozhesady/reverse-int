module.exports = function reverse(n) {
	let num = n.toString()
	let array = num.split('')
	let result = ''
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] !== '-' && array[i] !== '+') {
			result += array[i]
		}
	}
	return Number(result)
}
