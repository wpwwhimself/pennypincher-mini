import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button } from '@/components/pp/UI';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Header, HeaderIcon, Loader, Text } from '@/components/pp/Presentation';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { getData } from '@/helpers/API';

export default function TabTwoScreen() {
  const colors = {
    light: '#46eb5aff',
    dark: '#2a9c37ff',
  };
  const color = useThemeColor(colors, "tint");
  const [accountLoading, setAccountLoading] = useState(false);
  const [accounts, setAccounts] = useState({});

  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categories, setCategories] = useState({});

  useFocusEffect(useCallback(() => {
    setAccountLoading(true);
    getData("accounts")
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setAccountLoading(false);
      });
    
    setCategoryLoading(true);
    getData("categories")
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setCategoryLoading(false);
      });
  }, []));

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<HeaderIcon name="inbox" />}>
      <Header title="Podziały" />
      <Text>Tutaj zdefiniujesz konta i kategorie transakcji.</Text>

      <Header title="Konta" lvl="subtitle" icon="account-balance" />

      {accountLoading ? <Loader color={color} /> : <>
        <Button
          title="Nowe konto"
          iconName="add"
          color={color}
        />
      </>}

      <Header title="Kategorie" lvl="subtitle" icon="inbox" />

      {categoryLoading ? <Loader color={color} /> : <>
        <Button
          title="Nowa kategoria"
          iconName="add"
          color={color}
        />
      </>}
      
    </ParallaxScrollView>
  );
}
