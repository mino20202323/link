import { View, useWindowDimensions, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

export default function ResponsiveContainer({ children, style }: Props) {
  const { width } = useWindowDimensions();
  const maxWidth = 600;
  const contentWidth: number | string = width > maxWidth ? maxWidth : '100%';

  return (
    <View style={[styles.container, { width: contentWidth }, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});
