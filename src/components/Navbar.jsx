import { Button } from "./Button";
import classes from "./Navbar.module.scss";

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
        <div className={classes.nav}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur?</div>
        <h1>logo</h1>
        <Button dark={props.darkBtn}/>
        </>
    )
}

