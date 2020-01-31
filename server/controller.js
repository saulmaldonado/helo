const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async(req, res) => {
        const { username, password } = req.body

        const db = req.app.get('db')

        const result = await db.check_for_username(username)

        if(result[0]){
            res.status(400).json('Username is already taken.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = db.register_user(username, hash)
        
    },

    loginUser: async(req, res) => {

    }
}