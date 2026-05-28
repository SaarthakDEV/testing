import { useState } from "react"

type AppProps = {
  name?: string
}


const  App = ({ name }: AppProps) =>  {
  const [show, _] = useState<boolean>(true)

  return show ? <h2>Hello {name}</h2> : <></>
  
}

export default App
