
/**
 * Simple scoring method:
 * 
 * Sum each of the attributes then multiply by .0333333.
 * 
 * @param {*} param0 The applicant's information.
 */
module.exports = function scoring({ name, attribute: { intelligence, strength, endurance, spicyFoodTolerance } }) {
    console.log('simple-scoring: ' + JSON.stringify(name));

    const score = (intelligence
        + strength
        + endurance 
        + spicyFoodTolerance) / 40;

    return { name, score };
};
