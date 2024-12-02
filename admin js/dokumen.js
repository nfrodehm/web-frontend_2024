document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const btnType = e.target.classList.contains('sesuai') ? 'Sesuai' : 'Tidak Sesuai';
        const row = e.target.closest('tr');
        const name = row.children[1].textContent;
        alert(`${name} dinyatakan ${btnType}`);
    });
});

document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('File sedang diunduh.');
        // Logika untuk mengunduh file bisa ditambahkan di sini
    });
});
