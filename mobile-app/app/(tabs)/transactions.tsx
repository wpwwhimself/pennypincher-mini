import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Header, HeaderIcon, Loader, ParallaxIcon } from '@/components/pp/Presentation';
import { Button } from '@/components/pp/UI';
import { useFocusEffect } from 'expo-router';
import { getData } from '@/helpers/API';
import { useCallback, useState } from 'react';

export default function HomeScreen() {
  const colors = {
    light: '#5bb5f0ff',
    dark: '#276792ff',
  };
  const color = useThemeColor(colors, "tint");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useFocusEffect(useCallback(() => {
    setLoading(true);
    getData("transactions")
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []));

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<ParallaxIcon name="receipt" />}
    >
      <Header title="Transakcje" />

      {loading ? <Loader color={color} /> : <>
        <Button
          iconName="plus"
          title="Nowa transakcja"
          color={color}
        />
      </>}

    </ParallaxScrollView>
  );
}
