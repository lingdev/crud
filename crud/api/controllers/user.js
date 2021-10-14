module.exports = {

    friendlyName: ' Details ',

    description: ' Detail for User  ',
    
    inputs:  {
        
       userName: {
            type: "number",required: true,
        },
        lastName: {
            type: "string",
        },
        email: {
            type: "string",
        },
        age : {
            type: 'string',
        },
        
    },
  
    fn: async function (inputs) {

       await Createbook.create({
           where:{
               id:inputs.user
           }
        }).set({
            userName: inputs.userName,
            lastName: inputs.lastName,
            email: inputs.email,
            age: inputs.age,
        })

          return (200, {
            success: true
          });

    }
}