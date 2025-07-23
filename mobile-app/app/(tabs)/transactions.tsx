import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Header, HeaderIcon, Loader } from '@/components/pp/Presentation';
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
        setData(data.data);
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
      headerImage={<HeaderIcon name="library-books" />}>
      <Header title="Transakcje" />

      {loading ? <Loader color={color} /> : <>
        <Button
          icon={{ name: "add", color: "white" }}
          title="Nowa transakcja"
          color={color}
        />
      </>}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
