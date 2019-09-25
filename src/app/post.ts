export class Post {

  //created_at:Date;

  constructor(public title:string,public content:string, public loveIts:number, public createdAt:Date)
   {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }

}
