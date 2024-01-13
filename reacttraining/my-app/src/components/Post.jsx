export function Post (props) {
    const {id, name, hd, cb} = props;
    return <h2 id={id} onClick={cb}>{name}<button onClick={() => hd(id)}>Delete</button></h2>
    
}
