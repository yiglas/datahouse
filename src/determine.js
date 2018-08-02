var simpleScoring = require('./simple-scoring');

/**
 * Determines which scoring method should be used.
 * 
 * @param {*} event payload data.
 * @param {*} context aws context information.
 */
module.exports = (event, context) => {
    return simpleScoring;
};
