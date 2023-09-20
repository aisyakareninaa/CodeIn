function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode;
    output.contentWindow.eval(jsCode);
}
function studycase(){
    let htmlCode = document.getElementById("html-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode;
}

// Ambil elemen-elemen yang dibutuhkan
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const scoreModal = document.getElementById('scoreModal');
const modalScore = document.getElementById('modalScore');

// Event listener untuk membuka modal saat tombol "Send" diklik
openModalButton.addEventListener('click', () => {
    scoreModal.classList.remove('hidden'); // Hapus kelas 'hidden' untuk menampilkan modal
    
    // Di sini Anda dapat mengatur nilai skor awal dan target
    const initialScore = 0; // Skor awal
    const targetScore = 80; // Skor target

    // Fungsi untuk menganimasikan peningkatan angka score
    function animateScore() {
        let currentScore = initialScore;
        const scoreElement = document.getElementById('modalScore');
        const animationDuration = 1500; // Durasi animasi dalam milidetik (misalnya, 1 detik)

        const interval = setInterval(() => {
            if (currentScore < targetScore) {
                currentScore += 1; // Peningkatan angka per langkah
                scoreElement.textContent = currentScore;
            } else {
                clearInterval(interval); // Hentikan animasi jika mencapai target score
            }
        }, animationDuration / (targetScore - initialScore)); // Hitung langkah animasi
    }

    animateScore(); // Memulai animasi peningkatan angka score
});

// ... Kode lainnya ...


// Event listener untuk menutup modal
closeModalButton.addEventListener('click', () => {
    scoreModal.classList.add('hidden'); // Tambahkan kembali kelas 'hidden' untuk menyembunyikan modal
});
