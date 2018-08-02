module.exports = (body) => ({
    statusCode: 400,
    body: body || "The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications."
});
