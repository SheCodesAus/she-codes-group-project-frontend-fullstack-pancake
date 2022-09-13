export const deleteWorkshopById = async (id, token) => {
  await fetch(`${process.env.REACT_APP_API_URL}/workshops/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  });
};
