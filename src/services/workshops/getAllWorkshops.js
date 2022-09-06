const getWorkshops = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/workshops/`);
  return response.json();
};

export const getAllWorkshops = async () => {
  const data = await getWorkshops();
  const dataSortedById = data.sort((a, b) => a.id - b.id);
  return dataSortedById;
};
