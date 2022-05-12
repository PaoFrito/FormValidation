class userClass{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

let users = []

CreateUser = (username, email, password) =>{
    const NewUser = new userClass(username, email, password)
    let res = true

    users.forEach(user => {

        if(user.email == NewUser.email)
            res = `E-mail já cadastrado`

        if(user.username == NewUser.username)
            res = `Nome de usuário já cadastrado`

    });

    if(res == true)
        users.push(NewUser)

    return res
}