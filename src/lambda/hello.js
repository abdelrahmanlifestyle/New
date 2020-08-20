exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: 'Hello, world!',
    });
};

// exports.handler = (event, context, callback) => {
//     callback('Oh no! An error.');
// };