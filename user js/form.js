function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function selectOption(option) {
    document.getElementById('selection').style.display = 'none'; // Hide buttons
    document.getElementById('form-section').style.display = 'block'; // Show form
    document.getElementById('form-title').textContent = `Form ${option}`; // Update title
}

function dashboard() {
    alert("Anda kembali ke dashboard.");
}

function submitForm() {
    alert("Form telah disubmit.");
}

function openDokumen() {
    alert("Anda telah memilih pengajuan dokumen.");
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
