type ButtonProps = {
  title: string
}
export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="w-full p-4 transition-all duration-200 hover:bg-blue-200 text-white">{title}</button>
  )
}