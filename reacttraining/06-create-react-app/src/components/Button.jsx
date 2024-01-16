export function Button ( { setCount, text }) {
    return (
    <button 
    onClick={setCount}>
    {text}
    </button>
    )
}