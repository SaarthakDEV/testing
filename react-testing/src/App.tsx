import { useState } from "react"
import Role from "./components/Application/Application"
import { Skills } from "./components/Skills/Skills"
import { MuiMode } from "./components/MuiMode/MuiMode"
import { AppProviders } from "./providers/AppProviders"

type AppProps = {
  name?: string
}


const  App = ({ name }: AppProps) =>  {
  const [show, _] = useState<boolean>(true)

  // return show ? <h2>Hello {name}</h2> : <></>
  // return <><Role /></>
  // return <><Skills  skills={[]}/></>
    return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
