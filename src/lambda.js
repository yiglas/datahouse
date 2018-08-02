const callbackLogger = require('./callbackLogger');

module.exports = (handler, func) => {
    return (event, context, callback) => {
        if (typeof handler === 'string')
            console.log(handler)
        else if (typeof handler === 'function') {
            func = handler;
        }

        console.log('event', event);
        console.log('context', context);

        if (!func)
            return console.log('func not defined!');

        callback = callbackLogger(callback);

        try {
            callback(null, func(event, context));
        }
        catch (e) { callback(e); }
    }
};