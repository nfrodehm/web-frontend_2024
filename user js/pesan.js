// Menampilkan halaman isi pesan
function openIsiPesan() {
    document.getElementById("dashboard-view").style.display = "none";
    document.getElementById("pesan-view").style.display = "block";
}

// Kembali ke dashboard
function goBack() {
    document.getElementById("pesan-view").style.display = "none";
    document.getElementById("dashboard-view").style.display = "block";
}

// Sidebar menu interaksi
document.getElementById("pesan").addEventListener("click", function () {
    alert("Anda memilih menu Pesan!");
});
