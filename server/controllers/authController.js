module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    const found = await db.find_user([username])
    if (+found[0].count !== 0) {
      return res.status(409).send({message: 'Username already registered'})
    }
    const user_id = await db.add_user({username, password, profile_pic: `https://robohash.org/${username}`})
    req.session.user = {user_id: user_id[0].user_id, username, profile_pic: `https://robohash.org/${username}`}
    res.status(201).send({message: 'Logged In', user: req.session.user})
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    const found = await db.find_user([username])
    if (+found[0].count === 0) {
      return res.status(401).send({message: 'An account with that username does not exist'})
    } const foundUser = await db.find_user([username])
    const {user_id, profile_pic} = foundUser[0];
    if (password !== foundUser[0].password) {
      return res.status(401).send({message: 'Password is incorrect'})
    };
    req.session.user = {user_id, username, profile_pic}
    res.status(200).send({message: 'Logged In', user: req.session.user})
  },
  
}