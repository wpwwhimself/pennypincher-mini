import {
  Icon,
  Button as OrigButton,
  FAB as OrigFAB,
  Input as OrigInput
} from '@rneui/base';
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
      leftIcon={<InputIcon name={props.iconName} />}
      {...props}
    />
  );
}

interface InputIconProps {
  name: string,
}
export function InputIcon({ name }: InputIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");
  return <Icon type="font-awesome-5" size={16} solid name={name} color={color} />
}


interface ButtonIconProps {
  name: string,
}
export function ButtonIcon({ name }: ButtonIconProps) {
  return <Icon type="font-awesome-5" size={16} iconStyle={{ marginRight: 5 }} solid name={name} color="white" />
}
