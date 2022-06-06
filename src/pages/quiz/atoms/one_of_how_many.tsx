

export interface IQuizBlockHowMany{
    one:number,
    all:number

}

export const QuizBlockHowMany =(params: IQuizBlockHowMany)=>{
    return(
        <div className="Quiz_howmany">
            {params.one} из {params.all}
        </div>
    )
}




