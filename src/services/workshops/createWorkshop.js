const postWorkshop = async (token, workshopDetails) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/workshops/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workshopDetails),
  });
  return response.json();
};

export const createWorkshop = async (token, workshopDetails) => {
  return postWorkshop(token, workshopDetails);
};
