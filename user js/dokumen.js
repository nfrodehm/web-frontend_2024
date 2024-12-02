function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function openDokumen() {
    alert("Anda telah memilih pengajuan dokumen.");
}

function submitDokumen() {
    const fileInput = document.getElementById('upload');
    if (fileInput.files.length === 0) {
        alert("Harap unggah file sebelum mengirim.");
    } else {
        alert("Dokumen telah berhasil dikirim!");
    }
}
function dashboard() {
    alert("Anda kembali ke dashboard.");
}

function openForm() {
    alert("Anda telah memilih pelayanan surat.");
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