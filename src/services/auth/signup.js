const postUser = async credentials => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const signup = async credentials => {
  const data = await postUser(credentials);
  return data;
};
