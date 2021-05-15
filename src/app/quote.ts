export class Quote {
    showDetails: boolean;
    upVote: number;
    downVote: number;

    constructor(public author: string, public quote: string, public per: string, public date: Date){
        this.showDetails = false;
        this.upVote = 0;
        this.downVote =0;
    }

}
 