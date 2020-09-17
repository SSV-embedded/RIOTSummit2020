export function formatNumber (num, decimals = 0) {
	num = num || 0;
	const [pre, post] = num.toFixed(decimals).split('.');
	let str = (post) ? '.' + post : '';
	for (let i = 0, j = pre.length - 1; j >= 0; i++, j--) {
		str = pre[j] + ((i % 3 === 0 && i > 0) ? ',' : '') + str;
	}
	return str;
}
