export interface IQuizBlockTitle{
    text:string,
    id:string,
    item:number
}
export const QuizBlockTitle =(params: IQuizBlockTitle)=>{
    return(
        <div className="quiz_block_title" id={params.id}>
            <h1>
            {params.item}.{params.text}
            </h1>
        </div>
    )
}