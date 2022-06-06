

export interface ICompletedInsignia{
    text:string,
    class:string
    

}

export const CompletedInsignia =(params: ICompletedInsignia)=>{
    return(
        <div className={params.class}>
            {params.text}
        </div>
    )
}




