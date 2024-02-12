interface formType{
    name:string,
    email:string,
    messege:string,
}
const Form=(props:formType)=>{
    return(
        <>
        <div>
        Name:{props.name}

        </div>
        <div>
        Email:{props.email}

        </div>
        <div>
        Messege:{props.messege}

        </div>
        </>
    )
}
export default Form