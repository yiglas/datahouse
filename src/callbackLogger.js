module.exports = (callback)  => {
    return function(error, result) {
        if (error) {
            console.log('callback.error', error);
            return callback(error);
        }

        console.log('callback.result', result);
        return callback(null, result);
    }
};
