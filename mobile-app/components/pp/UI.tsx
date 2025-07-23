import { Button as OrigButton, Input as OrigInput } from '@rneui/base';
import { IconSymbol } from "../ui/IconSymbol"
import { useThemeColor } from '@/hooks/useThemeColor';

export function Button(props: any) {
  return (
    <OrigButton
      icon={<HeaderIcon name={props.iconName} />}
      {...props}
    />
  );
}

export function Input(props: any) {
  return (
    <OrigInput
      {...props}
    />
  );
}

interface InputIconProps {
  name: string,
}
export function InputIcon({ name }: InputIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");
  return <IconSymbol name={name} size={24} color={color} />
}


interface HeaderIconProps {
  name: string,
}
export function HeaderIcon({ name }: HeaderIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "background");
  return <IconSymbol name={name} size={24} color={color} />
}
