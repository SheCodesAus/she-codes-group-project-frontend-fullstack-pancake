const putWorkshop = async (id, token, workshopDetails) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/workshops/${id}/`,
    {
      method: "PUT",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workshopDetails),
    }
  );
  return response.json();
};

export const updateWorkshopById = async (id, token, workshopDetails) => {
  return putWorkshop(id, token, workshopDetails);
};
