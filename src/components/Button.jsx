export function Button(props){
    console.log(props);
    return(
        <>
        <button style={props.dark ? { background:"black", color:'white'} : null}>click</button>
        </>
    )
}