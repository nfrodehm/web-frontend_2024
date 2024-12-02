<script>
        // Ambil elemen HTML
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.createElement('div'); // Overlay untuk efek
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        // Event untuk membuka/tutup sidebar
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Tutup sidebar jika overlay diklik
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Fungsi-fungsi menu
        document.getElementById("history").addEventListener("click", function () {
            alert("Anda memilih menu Riwayat!");
        });

        function dashboard() {
            alert("Anda kembali ke dashboard.");
        }

        function openForm() {
            alert("Anda telah memilih pelayanan surat.");
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
    </script>