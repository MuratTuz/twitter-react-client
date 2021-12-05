import Swal from "sweetalert2";


const errorAlert = (alertMessage) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: alertMessage,
  });
};
export { errorAlert };
