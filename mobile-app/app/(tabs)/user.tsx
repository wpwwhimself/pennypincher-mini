import { StyleSheet, ToastAndroid } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useCallback, useState } from 'react';
import { getAllAPIConfig, setAPIConfig } from '@/helpers/API';
import { Button, Input, InputIcon } from '@/components/pp/UI';
import { Header, HeaderIcon, Loader, ParallaxIcon, Text } from '@/components/pp/Presentation';
import { useFocusEffect } from 'expo-router';

export default function TabTwoScreen() {
  const colors = {
    light: '#f06161ff',
    dark: '#8e1f1fff',
  };
  const color = useThemeColor(colors, "tint");

  const [loading, setLoading] = useState(false);

  const [server, setServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveAllAPIData = () => {
    setLoading(true);
    setAPIConfig('server', server);
    setAPIConfig('username', username);
    setAPIConfig('password', password);

    ToastAndroid.show('Dane API zapisane', ToastAndroid.SHORT);
    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    getAllAPIConfig("basic").then((data) => {
      setServer(data.server || "");
      setUsername(data.username || "");
      setPassword(data.password || "");
    })
  }, []));

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<ParallaxIcon name="user" />}>
      <Header title="Ja" />
      <Text>Podaj dane do logowania do API.</Text>

      {loading ? <Loader color={color} /> : <>
        <Input
          label="Adres serwera"
          value={server}
          onChangeText={(text: string) => setServer(text)}
          iconName="server"
          inputMode="url"
        />
        <Input
          label="Nazwa użytkownika"
          value={username}
          onChangeText={(text: string) => setUsername(text)}
          iconName="user"
        />
        <Input
          label="Hasło"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          iconName="key"
          secureTextEntry={true}
          autoComplete="password"
        />
        <Button
          title="Zapisz"
          iconName="save"
          loading={loading}
          color={color}
          onPress={() => saveAllAPIData()}
        />
      </>}
    </ParallaxScrollView>
  );
}

