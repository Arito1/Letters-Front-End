const BASE_URL = import.meta.env.VITE_API_URL;


export async function getAllUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

export async function createUser(user) {
  await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
}

export async function getUserLetter(userId) {
  const res = await fetch(`${BASE_URL}/users/${userId}/letters`);
  return res.text();
}

export async function addLetter(userId, letter) {
  const res = await fetch(`${BASE_URL}/users/${userId}/letters`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ letter })
  });
  return res.json();
}
