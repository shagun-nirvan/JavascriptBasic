const user ={
    username:"Shagun",
    price:699,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()
