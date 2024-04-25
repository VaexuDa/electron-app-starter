import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/select'

export function AssignTo(): JSX.Element {
  return (
    <Select>
      <div className="flex items-center justify-start gap-x-2">
        <label className="text-muted-foreground text-sm">Assign to</label>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select a assignee" />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Assignee</SelectLabel>
          <SelectItem value="@john">John(Editor)</SelectItem>
          <SelectItem value="@jack">Jack(Coder)</SelectItem>
          <SelectItem value="@lily">Lily(Designer)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
