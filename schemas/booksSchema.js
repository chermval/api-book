const schemaBooks = {
    properties: {
        title: {type: "string"}
    },
    optionalProperties: {
        author: {type: "string"},
        description: {type: "string"}
    }
}

module.exports = schemaBooks