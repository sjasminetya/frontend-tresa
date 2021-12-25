import { toast } from 'react-toastify';

const errorResponseHandler = (error) => {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) {
        message = "Something went wrong";
      } else {
        message = error.response.data.error.error;
      }
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return Promise.reject(error)
    }
  }
};

export default errorResponseHandler;
