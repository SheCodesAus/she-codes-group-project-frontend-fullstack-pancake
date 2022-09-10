import React from "react";
import Placehoder from "../../../../assets/images/placeholder.svg"

export default function ActiveTile() {
  const token = window.localStorage.getItem('token')
//   const handleDelete = async(token) => {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/workshops/`, {
//     method: "DELETE",
//     headers: {
//           Authorization: `Token ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(workshopDetails),
//       });
//       return response.json();
// };


  return (
    <>
      <div className="tile tile-active">
        <img src={Placehoder} alt=""/>
        <h3>workshop title</h3>
        <div className="button-group buttons-active">
          <button className="button-primary">Delete Workshop</button>
          <button className="button-primary">Update Workshop</button>
        </div>
      </div>
    </>
  );
}
// const postWorkshop = async (token, workshopDetails) => {

// const response = await fetch(`${process.env.REACT_APP_API_URL}/workshops/`, {
//   method: "POST",
//   headers: {
//     Authorization: `Token ${token}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(workshopDetails),
// });
// return response.json();
// };

// export const createWorkshop = async (token, workshopDetails) => {
// return postWorkshop(token, workshopDetails);
// };