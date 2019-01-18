export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: number;

    public constructor(title: string, content: string, loveIts: number = 0){
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = Date.now();
    }
}