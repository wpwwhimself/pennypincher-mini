import {
  Button as OrigButton,
  FAB as OrigFAB,
  Input as OrigInput
} from '@rneui/base';
import { IconSymbol } from "../ui/IconSymbol"
import { useThemeColor } from '@/hooks/useThemeColor';

export function Button(props: any) {
  return (
    <OrigButton
      icon={<ButtonIcon name={props.iconName} />}
      {...props}
    />
  );
}

export function FAB(props: any) {
  return (
    <OrigFAB
      {...props}
    />
  );
}

export function Input(props: any) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");
  return (
    <OrigInput
      color={color}
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


interface ButtonIconProps {
  name: string,
}
export function ButtonIcon({ name }: ButtonIconProps) {
  return <IconSymbol name={name} size={24} color="white" />
}
