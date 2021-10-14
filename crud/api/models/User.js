module.exports = {

    attributes: {
        firstName: {
            type: "string",required: true,
        },
        lastName: {
            type: "string",
        },
        email: {
            type: 'string',required: true, unique: true
        },
        age: {
            type: "string", required: true
        },
       
       

    }
}
