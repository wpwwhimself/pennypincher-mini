import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button, Input } from '@/components/pp/UI';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Header, HeaderIcon, Loader, Modal, ParallaxIcon, Text } from '@/components/pp/Presentation';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { getData } from '@/helpers/API';
import { Account, Category } from '@/types';

export default function TabTwoScreen() {
  const colors = {
    light: '#46eb5aff',
    dark: '#2a9c37ff',
  };
  const color = useThemeColor(colors, "tint");
  const [accountLoading, setAccountLoading] = useState(false);
  const [accounts, setAccounts] = useState([] as Account[]);
  const [accountIsEdited, setAccountIsEdited] = useState(false);
  const [accountEdited, setAccountEdited] = useState({} as Account);

  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categories, setCategories] = useState([] as Category[]);

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
      headerImage={<ParallaxIcon name="inbox" />}>
      <Header title="Podziały" />
      <Text>Tutaj zdefiniujesz konta i kategorie transakcji.</Text>

      <Header title="Konta" lvl="subtitle" icon="inbox" />

      {accountLoading ? <Loader color={color} /> : <>
        <Button
          title="Nowe konto"
          iconName="plus"
          color={color}
          onPress={() => setAccountIsEdited(true)}
        />

        <Modal
          isVisible={accountIsEdited}
          onBackdropPress={() => setAccountIsEdited(false)}
        >
          <Header title={accountEdited.id ? "Edytuj konto" : "Nowe konto"} lvl="subtitle" centered />

          <Input
            label="Nazwa"
            value={accountEdited.name}
            onChangeText={(text: string) => setAccountEdited({ ...accountEdited, name: text })}
          />
        </Modal>
      </>}

      <Header title="Kategorie" lvl="subtitle" icon="inbox" />

      {categoryLoading ? <Loader color={color} /> : <>
        <Button
          title="Nowa kategoria"
          iconName="plus"
          color={color}
        />
      </>}
      
    </ParallaxScrollView>
  );
}
