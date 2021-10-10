export class Quote {
    showPublisher:boolean
     constructor(public id: number,public description: string, public author: string, public publisher: string){
         this.showPublisher = false;
     }

}
