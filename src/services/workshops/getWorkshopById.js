const getWorkshop = async id => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/workshops/${id}`
  );
  return response.json();
};

export const getWorkshopById = async id => {
  return getWorkshop(id);
};
