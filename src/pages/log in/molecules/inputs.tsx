import { LogInBlockInput, ILogInBlockInput} from "../atoms/input"


export const LogInBlockInputs =()=>{
    const LogInBlockInputsValueArray:ILogInBlockInput[]=[
        {type:"email",placeholder:"",id:"sdf",text:"Email"},
        {type:"password",placeholder:"",id:"sdf",text:"Password"}]
    return(
        <div className="LogIn_block_inputs">
            {
                LogInBlockInputsValueArray.map((e,i)=><LogInBlockInput 
                type={e.type} placeholder={e.placeholder} id={e.id} text={e.text}
                />)
            }
        </div>
    )
}
