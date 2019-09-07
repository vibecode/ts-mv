export interface UserProps {
  name?: string
  age?: number
  id?: number
}

export interface HasId {
  id?: number
}

export type Callback = () => void
