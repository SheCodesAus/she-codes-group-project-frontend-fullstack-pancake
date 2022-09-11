import Avatar from "../../assets/images/avatar.svg";

export const useDefaultAvatar = error => {
  error.target.src = Avatar;
};
