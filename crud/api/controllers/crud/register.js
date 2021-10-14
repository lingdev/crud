module.exports = {

    friendlyName: ' User register Details ',

    description: ' create User  Details   ',
    
    inputs:  {
        
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
        
try{
       await User.create({
        
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            age: inputs.age,
        })

          return (200, {
            success: true
          });

}

catch(err)
{
    console.log(err,"");
    return "failure"
}
    }
}