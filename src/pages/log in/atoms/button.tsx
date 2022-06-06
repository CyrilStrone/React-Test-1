

export interface ILogInBlockButton{
    id:string,
    text:string,
    value:string,
    class:string,
    correct:boolean,
    Click?: (correct: boolean) => void

}
export const LogInBlockButton =(params: ILogInBlockButton)=>{
    return(
        <div className="LogIn_block_button">
            <button className={`LogIn_block_button_block ${params.class}`} id={params.id} value={params.value} onClick={()=>params.Click&&params.Click(params.correct)}>
                <h1 className="LogIn_block_button_block_h1">
                    {params.text}
                </h1>
            </button>
        </div>
    )
}