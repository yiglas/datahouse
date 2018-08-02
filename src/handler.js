const determine = require('./determine');
const lambda = require('./lambda');
const badResponse = require('./responses/400');
const okResponse = require('./responses/200');

/**
 * Function that will score each applicants.
 * 
 * @param {*} event payload data.
 * @param {*} context aws context information.
 * @param {*} callback callback function (parm1 = Error, param2 = successful response).
 */
module.exports.handler = lambda('score applicants', (event, context) => {
    if (!event.body)
        return badResponse();

    const { applicants } = JSON.parse(event.body);

    if (!(applicants instanceof Array))
        return badResponse();

    const scoring = determine(event, context);

    const scoredApplicants = applicants.map(scoring);

    return okResponse(JSON.stringify({ scoredApplicants }));
});