import express from 'express'
const app = express()

app.use(express.json())


app.post('/user', (req, res) => {
    const {username} = req.body
    res.send(`Welcome ${username}`)
    
let userExists = false 

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
            userExists = true
            break;
        }
    }

    if(userExists(username)){
        res.send({ message: `Welcome Senpai ${username}`})
    }
    
    else{// guys creating new user because user does not exist

        const userArray = [{username}  , assignedCard ]

        const cards = []

        const randomIndex = Math.floor(Math.random() * cards.length)
        const assignedCard = cards[randomIndex]



        cards.push({ username , image : assignedCard })
        res.send({ message: `Welcome ${username}`, image: assignedCard });
}
    }



})