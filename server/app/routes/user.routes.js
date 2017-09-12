'use strict';
module.exports = ({router, models}) => {
    return router()
    .prefix('/users')
    .get('/profile', async function (ctx) {
        ctx.render({ status: 200, json: { data: '2333' }});
    });
};
