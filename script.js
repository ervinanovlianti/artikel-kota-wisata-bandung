const html = `Dilansir Techterms, Hypertext mengacu pada hyperlink yang mungkin terdapat dalam halaman HTML. Bahasa markup ini mengacu pada cara tag yang digunakan, untuk menentukan tata letak halaman dan elemen di dalam halaman. HTML disusun berdasar kode dan simbol tertentu, yang dimasukkan dalam sebuah file atau dokumen. Sehingga bisa ditampilkan pada layar komputer. Dan bisa dipahami oleh para pengguna internet.`
const css = `Penggunaan HTML di awal mula perkembangan internet memang bisa dibilang cukup karena saat itu internet hanya digunakan oleh kalangan terbatas untuk berbagi informasi penelitian. Saat itu, proses format halaman amat terbatas dan gaya atau style halaman situs masih monoton. Namun belakangan, setelah internet digunakan luas dan makin berkembang orang-orang mulai berpikir bagaimana mengembangkan halaman situs agar lebih menarik. Hal ini yang lantas membuat HTML menjadi amat terbebani.

Setelah perkembangan pesat internet, halaman web tidak hanya memiliki format tetapi juga warna dan tata letak lain harus dibebankan pada kontrol HTML. Pengembangan web berubah menjadi sesuatu yang sangat kompleks dan sulit ditangani. Tentu saja, peran HTML sebagai alat struktural dan alat bantu desain terasa amat berat. Untuk itulah kemudian CSS dibuat sebagai solusi dari tugas desain dan pemformatan, sedangkan HTML bisa kembali fokus pada tata letak halaman web.

CSS muncul dan lantas dikenal sebagai alat untuk memformat dokumen yang ditulis menggunakan bahasa markup yaitu HTML. CSS juga dikenal sebagai bahasa style sheet yang bekerja sama dengan HTML untuk membangun sebuah halaman situs jejaring.

Jadi, secara umum kita dapat mengartikan HTML sebagai bahasa untuk menggambarkan struktur halaman situs, sedangkan CSS merupakan bahasa untuk menggambarkan halaman situs, termasuk warna, tata letak, dan font. Hal ini memungkinkan seorang pengembang untuk mengadaptasi presentasi ke berbagai jenis perangkat, seperti layar besar monitor, layar kecil tablet atau smartphone, hingga mesin cetak (printer). CSS tidak lagi bergantung pada HTML dan dapat digunakan dengan bahasa markup lainnya.

Pemisahan HTML dari CSS nantinya akan mempermudah pemeliharaan situs sehingga dapat berbagi style sheet di seluruh halaman dan menyesuaikan halaman dengan lingkungan yang berbeda. Pemisahan ini berarti pemisahan struktur (HTML) dari presentasi (CSS).`

const js = `Website dinamis yang dimaksud berarti konten di dalamnya dapat bergerak atau mengubah apapun yang tampak di layar tanpa harus dimuat ulang secara manual. Misalnya seperti konten gambar animasi, maps, slideshow, polling, dan sebagainya.

Elemen-elemen tersebut tentunya membuat website menjadi lebih menarik, sehingga pengunjung jadi betah mengeksplorasi isi di dalamnya.

Awalnya, JavaScript hanya bekerja pada sisi client/frontend saja. Dengan begitu, proses pengolahan kode-kodenya hanya berjalan di sisi browser. Namun, seiring perkembangannya, JavaScript juga bisa digunakan di sisi server. Tentunya dengan bantuan berbagai framework seperti Node.js, dan React.js.

Penggunaan JavaScript dalam pengembangan website sering dikaitkan dengan HTML dan CSS. Hal ini karena dalam pembuatan website, ketiga elemen tersebut berperan penting dan saling berkaitan satu sama lain. Ilustrasi berikut menggambarkan fungsi HTML, CSS, dan JavaScript ketika membangun sebuah website.`

const php = `PHP disebut bahasa pemrograman server side karena PHP diproses pada komputer server. Hal ini berbeda dibandingkan dengan bahasa pemrograman client-side seperti JavaScript yang diproses pada web browser (client). Pada awalnya PHP merupakan singkatan dari Personal Home Page. Sesuai dengan namanya, PHP digunakan untuk membuat website pribadi. Dalam beberapa tahun perkembangannya, PHP menjelma menjadi bahasa pemrograman web yang powerful dan tidak hanya digunakan untuk membuat halaman web sederhana, tetapi juga website populer yang digunakan oleh jutaan orang seperti wikipedia, wordpress, joomla, dll.

Saat ini PHP adalah singkatan dari PHP: Hypertext Preprocessor, sebuah kepanjangan rekursif, yakni permainan kata dimana kepanjangannya terdiri dari singkatan itu sendiri: PHP: Hypertext Preprocessor. PHP dapat digunakan dengan gratis (free) dan bersifat Open Source. PHP dirilis dalam lisensi PHP License, sedikit berbeda dengan lisensi GNU General Public License (GPL) yang biasa digunakan untuk proyek Open Source.

Kemudahan dan kepopuleran PHP sudah menjadi standar bagi programmer web di seluruh dunia. Menurut wikipedia pada februari 2014, sekitar 82% dari web server di dunia menggunakan PHP. PHP juga menjadi dasar dari aplikasi CMS (Content Management System) populer seperti Joomla, Drupal, dan WordPress.`

function php() {
    document.getElementById('lanjut').innerHTML = "hello";
}