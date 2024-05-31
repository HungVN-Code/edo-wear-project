// Lấy phần tử có class là .close-mess
const closeButton = document.querySelector('.close-mess');

// Lấy phần tử có class là .mess
const message = document.querySelector('.mess');

// Xử lý sự kiện click vào nút đóng
closeButton.addEventListener('click', function() {
    // Xoá class .show
    message.classList.remove('show');
});

// Tự động ẩn thông báo sau 8 giây
setTimeout(function() {
    // Xoá class .show
    message.classList.remove('show');
}, 8000);
