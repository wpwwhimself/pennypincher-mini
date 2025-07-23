import { StyleSheet } from "react-native"
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Dialog, Icon, LinearProgress } from "@rneui/base";

export function Modal(props: any) {
  return (
    <Dialog
      {...props}
    />
  )
}

interface HeaderIconProps {
  name: string,
}
export function HeaderIcon({ name }: HeaderIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");

  return <Icon type="font-awesome-5" solid
    size={24}
    color={color}
    name={name}
  />
}

interface HeaderProps {
  title: string,
  lvl?: "title" | "subtitle",
  icon?: string,
  centered?: boolean,
}
export function Header({ title, lvl = "title", icon = undefined, centered = false }: HeaderProps) {
  return (
    <ThemedView style={{ ...styles.titleContainer, justifyContent: centered ? "center" : "flex-start" }}>
      {icon && <HeaderIcon name={icon} />}
      <ThemedText type={lvl}>{title}</ThemedText>
    </ThemedView>
  );
}


interface ParallaxIconProps {
  name: string,
}
export function ParallaxIcon({ name }: ParallaxIconProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "background");

  return (
    <Icon type="font-awesome-5" solid
      size={250}
      name={name}
      color={color}
      style={styles.parallaxIcon}
    />
  )
}

interface TabIconProps {
  name: string,
}
export function TabIcon({ name }: TabIconProps) {
  return (
    <Icon type="font-awesome-5" solid
      size={24}
      name={name}
      color="#808080"
    />
  )
}

export function Loader(props: any) {
  return (
    <LinearProgress
      {...props}
    />
  )
}

export function Text(props: any) {
  return (
    <ThemedText {...props} />
  )
}

const styles = StyleSheet.create({
  parallaxIcon: {
    bottom: -50,
    left: -75,
    height: "100%",
    // position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: "transparent",
  },
});
