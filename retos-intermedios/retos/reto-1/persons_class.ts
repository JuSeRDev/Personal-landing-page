export class Persons {
  id: number
  content: string
  createdAt: string
  score: number
  img: string
  username: string

  constructor(id: number, content: string, createdAt: string, score: number, img: string, username: string){
    this.id = id
    this.content = content
    this.createdAt = createdAt
    this.score = score
    this.img = img
    this.username = username
  }
}
