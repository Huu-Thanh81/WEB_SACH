document.getElementById('submitForm').addEventListener('click', function () {
    var form = document.getElementById('contactForm');
    if (form.checkValidity()) {
      $('#exampleModal').modal('show'); // Mở modal nếu form hợp lệ
      // Tự động đóng modal xác nhận sau 3 giây
      setTimeout(function () {
      $('#exampleModal').modal('hide');
      }, 3000);
    } else {
      form.reportValidity(); // Kiểm tra và báo lỗi nếu form không hợp lệ
    }
});





