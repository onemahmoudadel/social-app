import { Button } from "@/components/ui/button"
import { useTheme } from "./components/theme-provider"

function App() {
  const { setTheme } = useTheme()

  return (
    <>
    <Button>Hello Shadcn</Button>

    <Button onClick={() => setTheme("light")}>
      Light
    </Button>
    <Button onClick={() => setTheme("dark")}>
      Dark
    </Button>
    </>
  )
}

export default App
