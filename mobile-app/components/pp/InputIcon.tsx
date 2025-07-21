import { IconSymbol } from "../ui/IconSymbol"

interface InputIconProps {
  name: string
}

export default function InputIcon({ name }: InputIconProps) {
  return <IconSymbol name={name} size={24} color="#808080" />
}