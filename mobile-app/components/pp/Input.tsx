import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput } from '@react-native-material/core';

export default function Input(props: any) {
  const textColor = useThemeColor({ light: undefined, dark: undefined }, "text");

  return (
    <TextInput
      variant="standard"
      inputStyle={{ color: textColor }}
      {...props}
    />
  );
}
