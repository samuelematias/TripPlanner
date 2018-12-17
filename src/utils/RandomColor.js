/**
 * auto-random-generator of colors HEX
 * @author samuelmataraso
 * @method RandomColor
 * @param none
 * @returns string
 */
export default (RandomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
});
