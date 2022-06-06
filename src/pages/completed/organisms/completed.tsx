import { useState } from "react"
import { ILogInBlockButton, LogInBlockButton } from "../../log in/atoms/button"
import { LogInBlock } from "../../log in/organisms/log_in"
import { QuizBlockTitle } from "../../quiz/atoms/title"
import {  questionList, QuizBlockCompletedTitleArray, QuizBlockInsignia, resultamount, resultArr } from "../../quiz/organisms/quiz"
import { CompletedTitle, ICompletedTitle } from "../atoms/title"


export const CompletedBlock =()=>{
    const CompletedBlockTitle:ICompletedTitle[]=[]
   
    CompletedBlockTitle.unshift({correctanswers:resultamount});
    
    const CompletedBlockButtonValueArray:ILogInBlockButton[]=[
        {id:"asdasd",text:"TO QUIZ",value:"asdsad",class:"btn_login",correct:false},
        {id:"asdasd",text:"RETRY",value:"asdsad",class:"btn_signup",correct:false}]

    const [resultComplete, setresultLogIn] = useState(false);
    
    const ClickComplete =() => {
        
        setresultLogIn(true)
        
    }
    
    return(
        <div>
            {resultComplete ? (
				<LogInBlock/>
			) : (
                
                <div className="completed_block">
                <div className="completed_block_title">
                Right Answered:
                    {QuizBlockCompletedTitleArray[0].correctanswers}/3
                
                </div>
                <div className="completed_block_question">
                {questionList[0].question.map((e, i)=>{
                    return (<QuizBlockTitle
                        text={e.text} id={e.id} item={e.item}
                />)})}
                <h1 className = {QuizBlockInsignia[0].class}>        
                    {QuizBlockInsignia[0].text} 
                </h1>
                </div>
                
                <div className="completed_block_question">
                {questionList[1].question.map((e, i)=>{
                    return (<QuizBlockTitle
                        text={e.text} id={e.id} item={e.item}
                />)})}

                <h1 className = {QuizBlockInsignia[1].class}>        
                    {QuizBlockInsignia[1].text} 
                </h1>
                </div>
                <div className="completed_block_question">
                {questionList[2].question.map((e, i)=>{
                    return (<QuizBlockTitle
                        text={e.text} id={e.id} item={e.item}
                />)})}
                <h1 className = {QuizBlockInsignia[2].class}>        
                    {QuizBlockInsignia[2].text} 
                </h1>
                </div>
                <div className="LogIn_block_buttons" >
                {CompletedBlockButtonValueArray.map((e,i)=><LogInBlockButton Click={ClickComplete}
                id={e.id} text={e.text} value={e.value} class={e.class} correct={e.correct}
                />)}
             </div>
                
            </div>
        )}
           
            
        </div>

        
    )
}