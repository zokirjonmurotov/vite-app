export function Button(props){
    const {children} = props;
    console.log(props);
    
    return(
        <>
        <button style={props.dark ? { background:"black", color:'white'} : null}>{children}</button>
        </>
    )
}