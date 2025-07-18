// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconSymbolName = typeof MaterialIcons.name;

/**
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 */

/**
 * //An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * //This ensures a consistent look across platforms, and optimal resource usage.
 * //Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 * forcing Material Icons - this app will be for android only
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={name} style={style} />;
}
