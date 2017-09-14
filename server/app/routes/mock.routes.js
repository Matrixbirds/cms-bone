'use strict';
const R = require('ramda');
const generateItems = ({ id, action, operation }) => {
	const generateItem = num => ({
		id: num, action: `stuff${num}`, operation: `operation${num}`
	});
	return R.pipe(
		R.reduce(
			(arr, item) => { arr.push(generateItem(item)); return arr}, []
		)
	)(R.range(1, 200));
};
module.exports = ({router, models}) => {
    return router()
    .prefix('/mock')
    .get('/', async function (ctx) {
		const paginator = (data, page=1, per=5) =>
		({
			data: { items: data.slice(0, 5) },
			meta: {
					page, per, totalPage: Math.ceil(data.length / (page * per))
				}
		});
        ctx.render({ status: 200,
			json: paginator(generateItems({ id: 0, action: 'stuff', operation: 'op' }))
		});
    });
};
