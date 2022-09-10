import React, { useState, useEffect } from "react";
import Loading from "../../../common/Loading";
import PostFirstWorkshop from "./PostFirstWorkshop";
import UserWorkshops from "./UserWorkshops";
import { getAllWorkshops } from "../../../../services/workshops/getAllWorkshops";

export default function ManageWorkshops({ userId }) {
  const [loading, setLoading] = useState(true);
  const [userWorkshops, setUserWorkshops] = useState();

  useEffect(() => {
    getAllWorkshops().then(data => {
      let userProjects = [];
      data.forEach(item => {
        if (item.organiser.toString() === userId.toString()) {
          userProjects.push(item);
        }
      });
      setUserWorkshops(userProjects);
      setLoading(false);
    });
  }, [userId]);

  const renderUserWorkshopManage = () => {
    return userWorkshops.length > 0 ? (
      <UserWorkshops userWorkshops={userWorkshops} />
    ) : (
      <PostFirstWorkshop />
    );
  };

  return loading ? <Loading /> : renderUserWorkshopManage();
}
