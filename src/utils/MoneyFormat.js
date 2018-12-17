import VMasker from 'vanilla-masker';

/**
 * convert/format the money value to unit R$.
 * @author samuelmataraso
 * @method MoneyFormat
 * @param string number
 * @returns string
 */
export default (MoneyFormat = number => {
	return VMasker.toMoney(number, {
		precision: 2,
		separator: ',',
		delimiter: '.',
		unit: 'R$',
		zeroCents: false
	});
});
