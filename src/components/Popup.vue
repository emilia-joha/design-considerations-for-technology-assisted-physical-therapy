<template></template>
<script>
import Swal from "sweetalert2";

export default {
  setup() {
    const showPopup = (message) => {
      return new Promise((resolve) => {
        const customStyle = Swal.mixin({
          customClass: {
            popup: "pupupContainer",
            confirmButton: "confirmBtn",
            cancelButton: "cancelBtn",
          },
        });
        customStyle
          .fire({
            scrollbarPadding: true,
            text: message,
            icon: "warning",
            iconColor: "#ff003d",
            showCancelButton: true,
            confirmButtonText: "YES",
            cancelButtonText: "CANCEL",
          })
          .then((result) => {
            resolve(result);
          });
      });
    };
    return { showPopup };
  },
};
</script>
<style>
.confirmBtn,
.cancelBtn {
  background-color: #ff003d !important;
  border: none !important;
  font-size: 18px !important;
  padding: 10px 30px !important;
  margin: 10px 0 !important;
  cursor: pointer !important;
  box-shadow: 0 0 10px 0 #000000 !important;
  border-radius: 15px !important;
  width: 200px !important;
  color: #000000 !important;
  font-family: "Roboto", sans-serif !important;
  font-weight: normal !important;
  font-style: normal !important;
}
.cancelBtn {
  background-color: #5ba9af !important;
}
.pupupContainer {
  width: 300px !important;
  border-radius: 15px !important;
  color: #000000 !important;
  font-family: "Roboto", sans-serif !important;
  font-weight: normal !important;
  font-style: normal !important;
}
body {
  padding-right: 0 !important;
}
</style>
