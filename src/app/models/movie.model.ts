export interface Movie {
    id:number,
    title:string,
    original_title:string,
    release_date:string,
    poster_path:string,
    backdrop_path:string,
    video:boolean,
    original_language:string,
    overview:string,
    genre_ids:Array<number>,
    adult:boolean,
    popularity:number,
    vote_count:number,
    vote_average:number
}
