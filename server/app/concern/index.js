'use strict';

module.exports = {
    async render(ctx, next) {
        ctx.render = function({ status, json }) {
            console.log('render');
            console.log("this", JSON.stringify(this));
            this.status = status;
            this.body = JSON.stringify(json);
            this.type =  'application/json; charset=utf-8';
        };
        await next();
    },
    async error(ctx, next) {
        try {
            await next();
        } catch(err) {
            ctx.app.emit('error', err, {
                body: { message: err.message },
                status: err.status || 500,
                stack: err
            });
        }
    }
};
