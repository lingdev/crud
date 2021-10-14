module.exports = {

    friendlyName: ' find user ',

    description: ' read for Detail  User  ',
    

  
    fn: async function () {

      var allUser  = await User.find()
      console.log(allUser,"alll");
      return allUser

        

    }
}