import { Button } from './components/ui/button'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="bg-background flex h-screen w-screen items-center justify-center rounded-lg">
      {/* <Textarea /> */}
      <Button>Create</Button>
      {/* <Assignment to={'John'} /> */}
    </div>
  )
}

export default App
