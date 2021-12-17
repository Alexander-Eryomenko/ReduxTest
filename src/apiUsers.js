export const getUsersApi = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
  return data
}

