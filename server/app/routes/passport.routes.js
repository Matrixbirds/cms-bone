'use strict';
module.exports = ({router, models}) => {
    router
    .prefix('/passport')
    .get('/', async function (ctx) {
    })
    .post('/login', async function (ctx) {
    })
    .get('/auth', async function (ctx) {
        ctx.render({ status: 200, json: { data: 'auth'} });
    });
    return router;
};
