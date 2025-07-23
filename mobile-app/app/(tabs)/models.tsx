import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button } from '@/components/pp/UI';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Header, HeaderIcon, Text } from '@/components/pp/Presentation';

export default function TabTwoScreen() {
  const colors = {
    light: '#46eb5aff',
    dark: '#2a9c37ff',
  };
  const color = useThemeColor(colors, "tint");

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<HeaderIcon name="inbox" />}>
      <Header title="Podziały" />
      <Text>Tutaj zdefiniujesz konta i kategorie transakcji.</Text>

      <Header title="Konta" lvl="subtitle" icon="account-balance" />

      <Button
        title="Nowe konto"
        iconName="add"
        color={color}
      />

      <Header title="Kategorie" lvl="subtitle" icon="inbox" />

      <Button
        title="Nowa kategoria"
        iconName="add"
        color={color}
      />
      
    </ParallaxScrollView>
  );
}
