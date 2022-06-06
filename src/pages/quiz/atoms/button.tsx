import { useEffect, useState } from "react";

export interface IQuizBlockButton{
    type:"button" | "submit" | "reset" | undefined,
    text:string,
    id:string,
    correct:boolean,
    correctColor?:boolean,
    Click?: (correct: boolean) => void
    result?:number
}

export const QuizBlockButton =(params: IQuizBlockButton)=>{
    
   const [colorv, setcolor] = useState<boolean|undefined>();

   useEffect(()=>{
    setcolor(undefined)
  },[
      params.result
  ])
    
    return(
        <div className={`quiz_block_button ${(colorv==true)?"quiz_block_button_green":(colorv==false)?"quiz_block_button_red":"quiz_block_button"}`}>
            <button id={params.id} type={params.type} value={`${params.correct}`} onClick={()=>{params.Click&&params.Click(params.correct);setcolor(params.correct?true:false)}}>
                <h1>
                    {params.text} 
                </h1>
            </button>
        </div>
    )
}