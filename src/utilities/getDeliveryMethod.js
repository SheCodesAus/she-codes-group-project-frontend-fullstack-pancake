export const getDeliveryMethod = (isOnline, isInPerson) => {
  if (isOnline && !isInPerson) {
    return "Online";
  }
  if (!isOnline && isInPerson) {
    return "In Person";
  }
  if (isOnline && isInPerson) {
    return "Online & In Person";
  }
};
