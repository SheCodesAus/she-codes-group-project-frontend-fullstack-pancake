import ErrorImage from "../../assets/images/error-image.svg";

export const useErrorImage = error => {
  error.target.src = ErrorImage;
};
