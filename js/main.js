// Nút trên menu hiện popup lựa chọn
document.addEventListener("click", function (e) {
  const userMenuButton = document.getElementById("user-menu-button");
  const userDropdown = document.getElementById("user-dropdown");

  if (!userMenuButton || !userDropdown) return;

  // Toggle menu khi nhấn nút (hoặc các phần tử bên trong nút như icon)
  if (userMenuButton.contains(e.target)) {
    e.stopPropagation();
    userDropdown.classList.toggle("hidden");

    if (!userDropdown.classList.contains("hidden")) {
      userDropdown.classList.add(
        "animate-in",
        "fade-in",
        "zoom-in-95",
        "duration-200",
      );
    }
  }
  // Đóng menu khi nhấn ra ngoài
  else if (!userDropdown.contains(e.target)) {
    userDropdown.classList.add("hidden");
  }
});

function loadComponent(id, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Lỗi khi tải component:", error));
}

// Gọi hàm để load header và footer
loadComponent("header-component", "components/header.html");
loadComponent("footer-component", "components/footer.html");

// Số người trong form đặt phòng
