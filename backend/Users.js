import bcrypt from 'bcrypt'

const hashPass = (pass) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(pass, salt)
}

const Users = [
  {
    name: 'wajid',
    email: 'wajid@gmail.com',
    password: hashPass('12345'),
    isAdmin: true,
  },
  {
    name: 'user2',
    email: 'user2@gmail.com',
    password: hashPass('12345'),
    isAdmin: false,
  },

  {
    name: 'user3',
    email: 'user3@gmail.com',
    password: hashPass('12345'),
    isAdmin: false,
  },
  {
    name: 'user4',
    email: 'user4@gmail.com',
    password: hashPass('12345'),
    isAdmin: false,
  },
]

export default Users
