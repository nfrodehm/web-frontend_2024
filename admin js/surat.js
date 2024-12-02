document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Ubah tombol menjadi status "Sesuai"
        const parentCell = button.parentElement;
        parentCell.innerHTML = '<span class="status-success">Sesuai</span>';
    });
});