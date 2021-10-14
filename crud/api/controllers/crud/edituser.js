module.exports = {

    friendlyName: ' update  Details ',

    description: ' Update  for Detail  User  ',
    
    inputs:  {

        id:{
            type:"number",
            required: true,
        },
        
       firstName: {
            type: "string",
            required: true,
        },
        lastName: {
            type: "string",
        },
        email: {
            type: "string",
            required: true,
        },
        age : {
            type: 'number',
            required: true,
        },
        
    },
  
    fn: async function (inputs) {
        console.log(inputs,"dataaaaa");
        

       await User.updateOne({
           where:{
               id:inputs.id
           }
        }).set({

            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            age: inputs.age,
        })

          return (200, {
            success: true
          });

    }
}