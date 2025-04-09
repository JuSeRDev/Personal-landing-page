export class Persons {
    id;
    content;
    createdAt;
    score;
    img;
    username;
    constructor(id, content, createdAt, score, img, username) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.img = img;
        this.username = username;
    }
}
