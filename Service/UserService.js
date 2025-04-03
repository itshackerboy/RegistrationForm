class UserService{
    constructor(){}
    login(email,password){
        if(email =='admin@gmail.com'&& password == 'admin'){
               return "you are correct";
        }else{
            return "ypu are wrong";
        }
            
    }

    getAllUser(){
        //`this` for accessing global variable
        return this.details;
    }
}
module.exports = UserService;