import * as SecureStore from 'expo-secure-store';

/* *********************************** config *********************************** */

export async function getAPIConfig(key: string) {
  let res = await SecureStore.getItemAsync(key);
  return res;
}

export async function getAllAPIConfig(mode: "basic" | "token" = "token") {
  const fields = (mode === "basic") ? ["server", "username", "password"] : ["server", "token"];
  let promises = fields.map((key) => getAPIConfig(key));
  let userData = await Promise.all(promises);
  return Object.fromEntries(userData.map((value, index) => [fields[index], value]));
}

export async function setAPIConfig(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getToken() {
  getAllAPIConfig("basic").then(APIData =>
    fetch(`${APIData.server}api/users/tokens/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: APIData.username,
        password: APIData.password,
      }),
    })
      .then(res => res.json())
      .then(data => setAPIConfig("token", data.token))
      .catch(err => console.log("[token]", err, APIData.server))
  )
}

/* *********************************** data fetching *********************************** */

export async function getData(url_tail: string, params?: any) {
  let token = await getAPIConfig('token');
  if (!token) {
    await getToken();
    token = await getAPIConfig('token');
  }

  return getAllAPIConfig().then(APIData => fetch(`${APIData.server}api/${url_tail}?` + new URLSearchParams(params), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .catch(err => console.log("🟢", err))
  );
}
