export class Movies{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    star:number = 0;
    tags?:string[];
    imageUrl!:string;
    movieDuration!:string;
    origins!:string[];
    description!:string;
}

// export class Movies2{
//     id!:number;
//     price!:number;
//     name!:string;
//     favorite:boolean = false;
//     star:number = 0;
//     tags?:string[];
//     imageUrl!:string;
//     movieDuration!:string;
//     origins!:string[];
// }