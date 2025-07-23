import { StyleSheet, ToastAndroid } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useEffect, useState } from 'react';
import { getAllAPIData, setAPIData } from '@/helpers/API';
import { Button, Input, InputIcon } from '@/components/pp/UI';
import { HeaderIcon } from '@/components/pp/Presentation';

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
    setAPIData('server', server);
    setAPIData('username', username);
    setAPIData('password', password);

    ToastAndroid.show('Dane API zapisane', ToastAndroid.SHORT);
    setLoading(false);
  }

  useEffect(() => {
    getAllAPIData().then((data) => {
      setServer(data.server || "");
      setUsername(data.username || "");
      setPassword(data.password || "");
    })
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<HeaderIcon name="person" />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ja</ThemedText>
      </ThemedView>
      <ThemedText>Podaj dane do logowania do API.</ThemedText>
      <Input
        label="Adres serwera"
        value={server}
        onChangeText={(text: string) => setServer(text)}
        leftIcon={<InputIcon name="computer" />}
        inputMode="url"
      />
      <Input
        label="Nazwa użytkownika"
        value={username}
        onChangeText={(text: string) => setUsername(text)}
        leftIcon={<InputIcon name="person" />}
      />
      <Input
        label="Hasło"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        leftIcon={<InputIcon name="key" />}
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
