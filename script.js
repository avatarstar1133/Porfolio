document.addEventListener('DOMContentLoaded', () => {

    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // Định nghĩa Icon
    const iconTulip = '🌷';   // Light Mode (Cute)
    const iconPenguin = '🐧'; // Dark Mode (Cyberpunk)

    // Hàm cập nhật icon dựa trên class của body
    const updateIcon = () => {
        if (body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = iconPenguin;
        } else {
            themeToggleButton.textContent = iconTulip;
        }
    };

    // Kiểm tra theme đã lưu trong localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        body.classList.add('dark-theme');
    }
    
    // Cập nhật icon lúc mới load trang
    updateIcon();

    // Xử lý sự kiện click
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        updateIcon();

        // Lưu trạng thái vào localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', 'light-theme');
        }
    });

});