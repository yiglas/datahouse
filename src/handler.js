var determine = require('./determine');

/**
 * Function that will score each applicants.
 * 
 * @param {*} event payload data.
 * @param {*} context aws context information.
 * @param {*} callback callback function (parm1 = Error, param2 = successful response).
 */
module.exports.handler = function(event, context, callback) {
    console.log('score applicants');
    console.log('event: ' + JSON.stringify(event));
    console.log('context: ' + JSON.stringify(context));

    try {
        const { applicants } = JSON.parse(event.body);

        const scoring = determine(event, context);

        const scoredApplicants = applicants.map(scoring);

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(scoredApplicants)
        });
    }
    catch (error) { callback(error); }
}