function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Toggle the active class
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
}

function openForm() {
    alert("Anda telah memilih pelayanan surat.");
}

function openDokumen() {
    alert("Anda telah memilih pengajuan dokumen.");
}

function dashboard() {
    alert("Anda kembali ke dashboard.");
}

function openPesan() {
    alert("Anda telah memilih pesan.");
}

function openRiwayat() {
    alert("Anda telah memilih riwayat.");
}

function logout() {
    alert("Anda telah keluar.");
}
