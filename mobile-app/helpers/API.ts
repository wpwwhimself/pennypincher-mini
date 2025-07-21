import * as SecureStore from 'expo-secure-store';

export async function getAPIData(key: string) {
  let res = await SecureStore.getItemAsync(key);
  return res;
}

export async function getAllAPIData() {
  const fields = ["server", "username", "password"];
  let promises = fields.map((key) => getAPIData(key));
  let userData = await Promise.all(promises);
  return Object.fromEntries(userData.map((value, index) => [fields[index], value]));
}

export async function setAPIData(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}
