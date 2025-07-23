import { StyleSheet } from "react-native"
import { IconSymbol } from "../ui/IconSymbol"
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

interface HeaderIconProps {
  name: string,
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

interface HeaderProps {
  title: string,
  lvl?: "title" | "subtitle",
  icon?: string,
}
export function Header({ title, lvl = "title", icon = undefined }: HeaderProps) {
  return (
    <ThemedView style={styles.titleContainer}>
      {icon && <IconSymbol name={icon} size={24} color="#808080" />}
      <ThemedText type={lvl}>{title}</ThemedText>
    </ThemedView>
  );
}

export function Text(props: any) {
  return (
    <ThemedText {...props} />
  )
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
