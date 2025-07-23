import { StyleSheet } from "react-native"
import { IconSymbol } from "../ui/IconSymbol"
import { useThemeColor } from "@/hooks/useThemeColor";

interface HeaderIconProps {
  name: string
}

export function HeaderIcon({ name }: HeaderIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "background");

  return <IconSymbol
    size={310}
    color={color}
    name={name}
    style={styles.headerImage}
  />
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  }
});
