import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User } from './models/User'
import { UserProps } from './types'
import { UserForm } from './views/UserForm'
import { UserEdit } from './views/UserEdit'

// const users = new Collection(
//   'http://localhost:3000/users',
//   (json: UserProps) => {
//     return User.buildUser(json)
//   }
// )

// users.on('change', () => {
//   const root = document.getElementById('root')

//   if (root) {
//     new UserList(root, users).render()
//   }
// })

// users.fetch()

const user = User.buildUser({ name: 'Loh', age: 666 })

const root = document.getElementById('root')

if (root) {
  const userEdit = new UserEdit(root, user)
  userEdit.render()
} else {
  throw new Error('No root found')
}
