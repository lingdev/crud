module.exports = {

    friendlyName: ' Delete  Details ',

    description: ' Delete for Detail  User  ',
    
    inputs:  {
        
        id:{
            type:"number",
            required: true,
        }
        
    },
  
    fn: async function (inputs) {
        console.log(inputs,"reeeee");

       await User.destroyOne({
           where:{
               id:inputs.id
           }
        })

          return (200, {
            success: true
          });

    }
}