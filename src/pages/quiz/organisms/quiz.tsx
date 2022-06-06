import { useEffect, useState } from "react"
import { ICompletedInsignia } from "../../completed/atoms/insignia"
import { ICompletedTitle } from "../../completed/atoms/title"
import { CompletedBlock } from "../../completed/organisms/completed"
import { IQuizBlockButton, QuizBlockButton} from "../atoms/button"
import { IQuizBlockHowMany, QuizBlockHowMany } from "../atoms/one_of_how_many"
import { IQuizBlockTitle, QuizBlockTitle } from "../atoms/title"

export interface IQuizBlock{
    question:IQuizBlockTitle[],
    answers:IQuizBlockButton[],
    howmany:IQuizBlockHowMany[]
   
}
export const QuizBlockInsignia:ICompletedInsignia[]=[
]
export const QuizBlockCompletedTitleArray:ICompletedTitle[]=[
    {correctanswers:0}
]
const QuizBlockHowManyArrayOne:IQuizBlockHowMany[]=[
    {one:1,all:3}
]
const QuizBlockHowManyArrayTwo:IQuizBlockHowMany[]=[
    {one:2,all:3}
]
const QuizBlockHowManyArrayThree:IQuizBlockHowMany[]=[
    {one:3,all:3}
]
const QuizBlockTitleValueArrayOne:IQuizBlockTitle[]=[
    {text:"Кто любит мяукать?",id:"",item:1}
]
const QuizBlockButtonValueArrayOne:IQuizBlockButton[]=[
    {type:"button",text:"Кот",id:"s",correct:true},
    {type:"button",text:"Слон",id:"s",correct:false},
    {type:"button",text:"Собака",id:"s",correct:false},
    {type:"button",text:"Жираф",id:"s",correct:false}
]

const QuizBlockTitleValueArrayTwo:IQuizBlockTitle[]=[
    {text:"Сколько сердец у осьминога?",id:"",item:2}
]
const QuizBlockButtonValueArrayTwo:IQuizBlockButton[]=[
    {type:"button",text:"1",id:"s",correct:false},
    {type:"button",text:"2",id:"s",correct:false},
    {type:"button",text:"3",id:"s",correct:false},
    {type:"button",text:"4",id:"s",correct:true}
]
const QuizBlockTitleValueArrayThree:IQuizBlockTitle[]=[
    {text:"Сколько цветов в радуге?",id:"",item:3}
]
const QuizBlockButtonValueArrayThree:IQuizBlockButton[]=[
    {type:"button",text:"5",id:"s",correct:false},
    {type:"button",text:"6",id:"s",correct:false},
    {type:"button",text:"7",id:"s",correct:true},
    {type:"button",text:"8",id:"s",correct:false},
]
export const questionList:IQuizBlock[] = [
        
    {
        question:QuizBlockTitleValueArrayOne,
        answers:QuizBlockButtonValueArrayOne,
        howmany:QuizBlockHowManyArrayOne
    },
    {
        question:QuizBlockTitleValueArrayTwo,
        answers:QuizBlockButtonValueArrayTwo,
        howmany:QuizBlockHowManyArrayTwo
    },
    {
        question:QuizBlockTitleValueArrayThree,
        answers:QuizBlockButtonValueArrayThree,
        howmany:QuizBlockHowManyArrayThree
    },
    
]

export const resultArr:string[] = [];
export var resultamount=0;


export const QuizBlock =()=>{
    
    const [currentQuestion, setCurrentQuestion] = useState(0);

	const [result, setresult] = useState(false);

    const [score, setScore] = useState(0);

    const [count, setCount] = useState(0);

    
    

    const Click = (correct:boolean) => {
		if (correct) {
			setScore(score + 1);
            resultamount++;

            QuizBlockCompletedTitleArray[0].correctanswers++

            QuizBlockInsignia.push({text:"✔",class:"completed_insignia_true"})
        }
        else{
            QuizBlockInsignia.push({text:"✖",class:"completed_insignia_false"})
        }
      
		const nextQuestion = currentQuestion + 1;
       
        
       
            
                if (nextQuestion < questionList.length) {
                    setTimeout(() => {
                    setCurrentQuestion(nextQuestion);
                }, 100);
                } else {
                    setScore(0)
                    setTimeout(() => {
                    setresult(true);
                }, 200);
                }
            
          
            
            
		
        
		
	};
    
    
	return(
        <div>
            {result ? (
                
				<CompletedBlock/>
			) : (
                
            <div className="quiz_block">
                {questionList[currentQuestion].question.map((e, i)=>{


                    
                    return (<QuizBlockTitle
                        text={e.text} id={e.id} item={e.item} 
                />)})}
                
                {questionList[currentQuestion].howmany.map((e, i)=>

                    (

                    <QuizBlockHowMany
                        one={e.one} all={e.all}
                    />
                    )
                        
                
                )}
                {questionList[currentQuestion].answers.map((e, i)=>

                    (

                    <QuizBlockButton Click={Click} 
                        type={e.type} text={e.text} id={e.id} correct={e.correct} result={currentQuestion}
                    />
                    )
                        
                
                )}
                
                
            </div>
            )}
           
            
        </div>
    )
}

