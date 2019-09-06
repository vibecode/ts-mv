interface UserProps {
  name?: string
  age?: number
}

type Callback = () => void

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(ev: string, callback: Callback) {
    const handlers = this.events[ev] || []

    handlers.push(callback)
    this.events[ev] = handlers
  }

  trigger(ev: string): void {
    const handlers = this.events[ev]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(cb => cb())
  }
}
