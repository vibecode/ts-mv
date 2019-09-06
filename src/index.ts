import { User } from './models/User'

const user = new User({ name: 'myname', age: 20 })

user.set({ name: 'lol', age: 9999 })

console.log(user.get('name'))
console.log(user.get('age'))

user.on('change', () => {
  console.log('changed')
})

user.trigger('change')
