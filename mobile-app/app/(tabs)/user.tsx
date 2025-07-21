import { StyleSheet, ToastAndroid } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button } from '@react-native-material/core'
import { useThemeColor } from '@/hooks/useThemeColor';
import { useEffect, useState } from 'react';
import Input from '@/components/pp/Input';
import InputIcon from '@/components/pp/InputIcon';
import { getAllAPIData, getAPIData, setAPIData } from '@/helpers/API';

export default function TabTwoScreen() {
  const colors = {
    light: '#c57cceff',
    dark: '#7d2c88ff',
  };
  const color = useThemeColor(colors, "tint");

  const [server, setServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveAllAPIData = () => {
    setAPIData('server', server);
    setAPIData('username', username);
    setAPIData('password', password);

    ToastAndroid.show('Dane API zapisane', ToastAndroid.SHORT);
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
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="person"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ja</ThemedText>
      </ThemedView>
      <ThemedText>Podaj dane do logowania do API.</ThemedText>
      <Input
        label="Adres serwera"
        value={server}
        onChangeText={(text: string) => setServer(text)}
        leading={<InputIcon name="computer" />}
        color={color}
        inputMode="url"
      />
      <Input
        label="Nazwa użytkownika"
        value={username}
        onChangeText={(text: string) => setUsername(text)}
        leading={<InputIcon name="person" />}
        color={color}
      />
      <Input
        label="Hasło"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        leading={<InputIcon name="key" />}
        color={color}
        secureTextEntry={true}
        autoComplete="password"
      />
      <Button
        title="Zapisz"
        leading={<InputIcon name="save" />}
        color={color}
        onPress={() => saveAllAPIData()}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
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
