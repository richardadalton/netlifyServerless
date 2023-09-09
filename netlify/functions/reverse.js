exports.handler = async function(event) {
    const eventBody = JSON.parse(event.body)
    message = eventBody.message.split("").reverse().join("");
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: message
        })
    }
}