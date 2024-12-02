function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Toggle the active class
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
}

function showPage(page) {
    alert(`Navigasi ke halaman ${page} belum diimplementasikan.`);
}

function logout() {
    alert("Anda telah keluar.");
}
