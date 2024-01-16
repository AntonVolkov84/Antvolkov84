export function MyComponent(props){
  const {name, age, hasPet} = props
  const text = hasPet ? `My cat ${name} is ${age} years old` : 'I don\'t have a pet'
  return(
      <div>
        <h1>{text}</h1>
      </div>
      
    )
  }