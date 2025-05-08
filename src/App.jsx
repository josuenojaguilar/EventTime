import { useRoutes } from "react-router-dom"
import { routes } from "./routes"
import { Toaster } from "react-hot-toast"

function App() {
  const mainRoutes = useRoutes(routes)

  return (
    <>
      { mainRoutes }
      <Toaster position='bottom-right' reverserOrder={false} />
    </>
  )
}

export default App
