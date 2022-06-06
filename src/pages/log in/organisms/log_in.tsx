
import { useState } from "react";
import { QuizBlock, QuizBlockCompletedTitleArray, QuizBlockInsignia} from "../../quiz/organisms/quiz";
import { ILogInBlockButton, LogInBlockButton } from "../atoms/button";
import { LogInBlockInputs } from "../molecules/inputs"



        


export const LogInBlock =()=>{
    QuizBlockCompletedTitleArray[0].correctanswers=0;
    QuizBlockInsignia.length = 0;
    const LogInBlockButtonsValueArray:ILogInBlockButton[]=[
        {id:"asdasd",text:"LOG IN",value:"asdsad",class:"btn_login",correct:false},
        {id:"asdasd",text:"SIGN UP",value:"asdsad",class:"btn_signup",correct:false}]

    const [resultLogIn, setresultLogIn] = useState(false);

    const ClickLogIn =() => {    
        setresultLogIn(true)    
    }

    
    return(
        <div>
            {resultLogIn ? (
                <QuizBlock/>
            ) : (
                    
            <div className="LogIn_block">
                <LogInBlockInputs/>
                <div className="LogIn_block_buttons" >
                    {LogInBlockButtonsValueArray.map((e,i)=><LogInBlockButton Click={ClickLogIn}
                    id={e.id} text={e.text} value={e.value} class={e.class} correct={e.correct}
                    />)}
                </div>
                
            </div>
            )}
        </div>
    )
}