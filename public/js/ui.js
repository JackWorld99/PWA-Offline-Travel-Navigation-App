document.addEventListener("DOMContentLoaded", function (event) {
  // nav menu
  const menus = document.querySelectorAll(".side-menu");
  M.Sidenav.init(menus, { edge: "left" });

  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  function updateStatus(event) {
    if (!navigator.onLine) {
      Swal.fire({
        title: "You've lost your network connection",
        text: "Please Swicth to Offline mode for better user experience.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    }
  }
});
