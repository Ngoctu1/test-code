// số lượng phòng, người lớn, trẻ em mặc định
document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.getElementById("booking-guest-trigger");
  const popup = document.getElementById("booking-guest-popup");
  const container = document.getElementById("booking-guest-container");

  // Trạng thái dữ liệu mặc định ban đầu
  let counts = {
    room: 1,
    adult: 1,
    child: 0,
  };

  // Giới hạn tối thiểu
  const minLimits = {
    room: 1,
    adult: 1,
    child: 0,
  };

  // Giới hạn tối đa
  const maxLimits = {
    room: 6,
    adult: 15,
    child: 8,
  };

  // Đóng mở Popup
  trigger.addEventListener("click", () => {
    popup.classList.toggle("hidden");
  });

  // Đóng popup khi click ra ngoài
  document.addEventListener("click", (event) => {
    if (!container.contains(event.target)) {
      popup.classList.add("hidden");
    }
  });

  // Cập nhật giao diện text bên ngoài và bên trong popup
  function updateDisplayText() {
    document.getElementById("text-room-count").innerText =
      `${counts.room} Phòng`;
    document.getElementById("text-guest-count").innerText =
      `${counts.adult} người lớn, ${counts.child} trẻ em`;

    document.getElementById("val-room").innerText = counts.room;
    document.getElementById("val-adult").innerText = counts.adult;
    document.getElementById("val-child").innerText = counts.child;
  }

  // Xử lý nút Tăng (+) - Kiểm tra giới hạn tối đa
  document.querySelectorAll(".btn-increase").forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");

      // Nếu giá trị hiện tại nhỏ hơn giới hạn tối đa thì mới cho tăng
      if (counts[target] < maxLimits[target]) {
        counts[target]++;
        updateDisplayText();
      }
    });
  });

  // Xử lý nút Giảm (-) - Kiểm tra giới hạn tối thiểu
  document.querySelectorAll(".btn-decrease").forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-target");

      // Nếu giá trị hiện tại lớn hơn giới hạn tối thiểu thì mới cho giảm
      if (counts[target] > minLimits[target]) {
        counts[target]--;
        updateDisplayText();
      }
    });
  });
});

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// Chọn ngày nhận phòng và trả phòng với flatpickr
document.addEventListener("DOMContentLoaded", function () {
  // Cấu hình chung cho cả 2 input
  const config = {
    dateFormat: "d/m/Y",
    minDate: "today", // Không cho chọn ngày trước hôm nay
    defaultDate: "today", // Placeholder hiển thị ngày hiện tại
  };

  // Khởi tạo lịch cho Nhận phòng
  const checkInPicker = flatpickr("#check-in", {
    ...config,
    onChange: function (selectedDates, dateStr) {
      // Khi chọn ngày nhận, cập nhật ngày tối thiểu cho ngày trả
      checkOutPicker.set("minDate", dateStr);
    },
  });

  // Khởi tạo lịch cho Trả phòng
  const checkOutPicker = flatpickr("#check-out", {
    ...config,
    defaultDate: new Date().fp_incr(1), // Tùy chọn: Để ngày trả mặc định là ngày mai
  });
});

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
