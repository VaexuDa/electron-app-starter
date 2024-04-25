import { AssignTo } from './components/common/assign-to'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex h-screen w-screen items-center justify-center rounded-lg bg-background">
      <div className="flex w-[420px] flex-col gap-y-2">
        <Textarea placeholder="What to do today?" />
        <div className="flex items-center justify-between gap-x-2">
          <Button>Create</Button>
          <AssignTo />
        </div>
      </div>
    </div>
  )
}

export default App
