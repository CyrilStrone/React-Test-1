

export interface ICompletedTitle{
    correctanswers:number,
    

}

export const CompletedTitle =(params: ICompletedTitle)=>{
    return(
        <div className="completed_title">
            {params.correctanswers}
        </div>
    )
}




