import { Button } from "./Button";

export default function Navbar(props){
    console.log(props);

    if (props.isMobile) {
        return(
            <>
            <h1>Responsive navbar</h1></>
        )
    }


    return(
        <>
        <h1>logo</h1>
        <Button dark={props.darkBtn}/>
        {/* {
            props.darkBtn ? <Button dark={true}/> : <Button />
        } */}
        
        </>
    )
}

