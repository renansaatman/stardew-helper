import { Button } from "../button"

export const SeasonsBar = () => {
  return (
    <div className="w-full bg-blue-100 flex items-center justify-between shadow-2xl">
      <Button title="PRIMAVERA" />
      <Button title="VERÃO" />
      <Button title="OUTONO" />
      <Button title="INVERNO" />
    </div>
  )
}