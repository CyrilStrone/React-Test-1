export interface ILogInBlockInput{
    type:string,
    placeholder:string,
    id:string,
    text:string
}
export const LogInBlockInput =(params: ILogInBlockInput)=>{
    return(
        <div className="LogIn_block_input">
            <h1 className="LogIn_block_input_h1">
            {params.text}
            </h1>
            <input className="LogIn_block_input_block" id={params.id} placeholder={params.placeholder} type={params.type}>
            </input>
        </div>
    )
}