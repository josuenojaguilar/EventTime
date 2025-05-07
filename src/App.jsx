import { useRoutes } from "react-router-dom"
import { routes } from "./routes"

function App() {
  const mainRoutes = useRoutes(routes)

  return (
    <>
      { mainRoutes }
    </>
  )
}

export default App
