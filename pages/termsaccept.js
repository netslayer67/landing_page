//rfce
import Script from "next/script";
import Headweb from "./components/head";
import Link from "next/link";
function termsaccept() {
  return (
    <section id="termsaccept" className="pt-10  pb-0">
      <Headweb />
      <div className="container pb-0 ">
        <div className="flex flex-wrap ">
          <div className="p-4 w-full px-4 ">
            <h3 className=" w-full mb-4 text-center sm:text-xl md:text-xl  font-bold text-dark dark:text-secondary lg:text-2xl">
              Kebijakan Penggunaan <br />
              Tanggal Perubahan Terakhir: 8 Juli 2020
            </h3>
            <div className="flex justify-end mb-4">
              <div className="flex ">
                <span className="mr-2  text-sm text-primary  dark:text-secondary">
                  Indonesia
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  id="dark-toggle-term"
                />
                <label htmlFor="dark-toggle-term">
                  <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-primary p-1">
                    <div className="toggle-circle h-4 w-4 rounded-full bg-secondary transition duration-300 ease-in-out"></div>
                  </div>
                </label>
                <span className="ml-2  text-sm text-primary  dark:text-secondary">
                  English
                </span>
              </div>
            </div>
            {/* indonesia */}
            <div
              id="p-term-indo"
              className="border-2 px-8 py-6 dark:text-secondary  max-h-[400px] text-dark border-slate-300 shadow-lg rounded-md overflow-y-auto  w-full"
            >
              Kebijakan Penggunaan (&quot;KP&quot;) DAISI ini berlaku terhadap
              penggunaan produk, layanan, maupun website yang disediakan oleh
              kami (PT. Timkado Sejahtera Indonesia), baik yang disiapkan
              langsung atau melalui pihak lain kepada Pengguna (masing-masing
              menyatakan &quot;Layanan DAISI&quot;). KP ini didesain untuk
              menjamin kepatuhan hukum dan peraturan yang berlaku pada Layanan
              DAISI. KP ini melindung kepenting seluruh klien kami dan nasabah
              mereka, juga itikad baik dan reputasi kami. KP ini sangat penting
              sampai-sampai kami tidak dapat memberikan Layanan DAISI kecuali
              Pengguna telah setuju terhadap ketentuannya. Dengan menggunakan
              Layanan DAISI Pengguna dianggap telah setuju dengan ketentuan ini.{" "}
              <br /> <br />
              Jika Pengguna menggunakan Layanan DAISI, maka KP ini berlaku.
              Setiap klien kami setuju untuk tunduk pada KP ini dan
              bertanggungjawab atas setiap pelanggaran. Pengguna tidak
              diperbolehkan untuk membantu atau mengajak pihak lainnya untuk
              melanggar ketentuan dalam KP ini. Kami akan memberlakukan dan
              menjamin kepatuhan pada KP ini dengan menggunakan cara yang
              dipandang perlu, seperti melakukan teguran dan pemantauan
              kegagalan email. Kami juga dapat menangguhkan atau menghentikan
              penggunaan Layanan DAISI berdasarkan Ketentuan Layanan Terhadap
              Customer apabila terdapat pelanggaran KP ini.
              <br /> <br /> Kami memperbaharui ketentuan ini dari waktu ke waktu
              dan kami akan memberitahu setiap perbaharuan melalui Notifikasi
              dalam aplikasi portal DAISI yang digunakan untuk mengakses
              langganan DAISI (jika ada), atau dengan memasang salinan terbaru
              dalam website kami. Pengguna setuju untuk membaca KP secara
              berkala dan selalu tunduk pada ketentuannya.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                {" "}
                1. Melaporkan Dugaan Pelanggaran
              </h4>
              <br />
              Kami mendukung penerima pesan yang dikirim melalui Layanan DAISI
              untuk melaporkan dugaan pelanggaran terhadap KP ini kepada kami
              dengan meneruskan pesan yang diterima nya melalui email ke{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:info@timkado.id"
              >
                info@timkado.id
              </a>
              . Kami memiliki kebijakan untuk melakukan penyelidikan yang
              memadai.
              <br /> <br /> Jika Pengguna mengetahui atau menduga adanya
              pelanggaran, Pengguna dianjurkan untuk segera memberitau kepada
              kami secara tertulis tentang kejadian tersebut.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                {" "}
                2. Tindakan Pengiriman Teks Yang Dilarang
              </h4>
              <br />
              <ul
                role="list"
                className="marker:text-dark mr-4  list-[lower-alpha] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Pengguna dilarang menggunakan DAISI untuk mengirim spam. Spam
                  dapat berupa pesan dalam jumlah yang banyak atau teks berisi
                  iklan. Pesan dalam jumlah banyak tanpa permintaan. Tanpa
                  permintaan maksudnya penerima tidak memberikan izin untuk
                  pengiriman pesan tersebut. Jumlah banyak berarti pesan dikirim
                  sebagai bagian dari koleksi pesan yang secara substantif
                  berisi sama. Pesan teks yang berisi iklan adalah spam dan
                  melanggar KP. Pesan teks yang berisi iklan dianggap spam jika
                  data yang diproses untuk pengiriman teks termasuk dalam
                  Peraturan Perlindungan Data Umum (&quot;PRDU&quot;) dan
                  Pengguna gagal memberitahukan kepada individu dan menetapkan
                  basis pemrosesan yang sah. Pengguna dilarang menggunakan
                  Layanan DAISI (secara langsung atau tidak langsung) untuk
                  mengirim atau mendistribuksikan:
                  <br />
                  (a) pelanggaran spam terhadap ketentuan yang berlaku; <br />{" "}
                  (b) mengirim pesan kepada nomor yang didapat melalui metode
                  panen internet; <br /> (c) mengirim pesan teks yang melanggar
                  ketentuan PRDU.
                </li>
                <li>
                  Pengguna dilarang menggunakan nama palsu atau yang
                  menyesatkan, alamat, maupun nomor atau kalimat judul. Pesan
                  yang dikirim, atau yang disebabkan dikirim melalui Layanan
                  DAISI tidak boleh: <br /> (a) menggunakan atau berisi judul
                  yang tidak valid atau palsu; <br /> (b) menggunakan atau
                  berisi nama domain yang tidak valid; <br /> (c) menggunakan
                  teknik apa pun untuk merepresentasikan, menyembunyikan, atau
                  mengaburkan informasi apa pun dalam mengidentifikasi titik
                  asal atau jalur transmisi; <br /> (d) menggunakan cara lain
                  untuk menipu; <br /> (e) menggunakan internet domain pihak
                  ketiga lainnya tanpa izin, atau meneruskan atau diteruskan
                  dari peralatan pihak ketiga tanpa izin pihak tersebut; <br />{" "}
                  (f) berisi informasi palsu atau menyeesatkan dalam judul
                  maupun konten; <br /> (g) menggunakan trademark, tagline,
                  logo, kami tanpa izin.{" "}
                </li>
                <li>
                  Pengguna dilarang mengirim pesan dari daftar yang dibeli
                  Pengguna dilarang menggunakan Layanan DAISI untuk mengirim:{" "}
                  <br /> (a) list yang dibeli, disewa, atau dipinjam, dan <br />{" "}
                  (b) list yang akan menyebabkan banyak permintaan berhenti
                  berlangganan atau komplainan Spam, sebagaimana diperbolehkan
                  dalam praktisnya.
                </li>
              </ul>
              <br />
              <h4 className="font-bold text-xl">
                {" "}
                3. Persyaratan Keluar dari Pengiriman Teks
              </h4>
              <br />
              Pengguna menjamin bahwa setiap pesan yang dikirim menggunakan
              Layanan DAISI akan berisi:
              <br /> (a) informasi judul yang tidak menyesatkan atau palsu; dan{" "}
              <br /> (b) sebuah saran bahwa penerima dapat berhenti
              berlangganan; memilih keluar dari atau sebaliknya menuntut agar
              penggunaan informasi tersebut yang tanpa diminta, tidak diizinkan
              dan/atau komunikasi yang tidak pantas sebagaiman dijelaskan dalam
              KP untuk dihentikan (dan bagaimana penerima dapat memberitahu
              bahwa dirinya ingin berhenti berlangganan, memilih keluar, atau
              berhenti menggunakan informasi tersebut). Persyaratan ini mungkin
              tidak berlaku apabila pesan yang dikirim adalah pesan transaksi
              atau apabila persyaratan ini tidak diwajibkan oleh hukum. Pengguna
              menjamin bahwa dirinya akan sesegera mungkin tunduk pada ketentuan
              memilih keluar, berhenti berlangganan, permintaan &quot;tidak
              menelpon&quot;dan &quot;tidak mengirim&quot;.
              <br />
              <br />
              <h4 className="font-bold text-xl"> 4. Tele-Marketing </h4>
              <br />
              Pengguna wajib untuk tunduk pada seluruh ketentuan tentang
              tele-marketing yang berlaku, termasuk dan tidak terbatas pada
              ketentuan dalam ‘Penggunaan Layanan DAISI Yang Layak’ dibagian
              bawah ini. Pengguna wajib tunduk pada seluruh ketentuan tentang
              perekaman panggilan dan menjamin bahwa persetujuan yang tepat
              untuk merekam telah didapatkan sebelum memulai rekaman. Jika
              Pengguna menggunakan Layanan Daisi untuk menelepon, Pengguna juga
              wajib untuk tunduk pada ketentuan yang berlaku dalam industry nya.
              Pengguna dilarang menggunakan atau memberikan akses untuk
              menggunakan Layanan DAISI untuk melakukan panggilan darurat atau
              untuk mencari atau menyediakan layanan darurat.
              <br />
              <br />
              <h4 className="font-bold text-xl"> 5. Tidak ada Gangguan</h4>
              <br />
              Pengguna setuju untuk tidak menggunakan Layanan DAISI yang dapat
              berdampak pada operasional normal, privacy, integritas atau
              keamanan hak milik akun lain, nama domain, URL, jaringan web,
              jaringan, sistim, fasilitas, peralatan, data, informasi lain atau
              operasi bisnis. Pengguna juga setuju untuk tidak menggunakan
              Layanan DAISI untuk mendapatkan akses tidak sah untuk menggunakan,
              memonitor, melakukan referensi yang tidak sah kepada hak milik
              orang lain, kecuali Pengguna telah mendapat persetujuan yang jelas
              sebelumnya. Contoh Tindakan yang dilarang termasuk (namun tidak
              terbatas): peretasan, penipuan, penolakan layanan, membanjiri
              dengan pesan teks, dan/atau mengirim pesan yang berisi virus,
              worm, atau malware lainnya, baik itu spyware, adware atau file
              atau program lainnya. Pengguna juga berjanji untuk tidak
              menggunakan Layanan DAISI yang menyebabkan atau dapat menyebabkan
              alamat IP DAISI, domain DAISI, atau domain customer DAISI masuk
              dalam daftar hitam. Larangan ini berlaku dengan atau tanpa maksud
              dari Pengguna dan baik dilakukan secara sengaja atau tidak.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                {" "}
                6. Penggunaan Layanan DAISI Yang Layak
              </h4>
              <br />
              Pengguna akan tunduk pada batasan yang berlaku dalam penggunaan
              Layanan DAISI sebagaimana dijelaskan dalam Produk dan Katalog
              Layanan yang terdapat pada https://timkado.id/legal/SLA
              (&quot;Batasan Layanan&quot;). Kami dapat memperbaharui atau
              mengubah Batasan Layanan ini dengan memperbaharui website
              tersebut, kami menyarankan Pengguna mencek halaman site tersebut
              dari waktu ke waktu. <br />
              <br />
              Sebagai tambahan, dan tanpa membatasi persyaratan lain dari KP
              ini, Pengguna tidak diperbolehkan (secara langsung maupun tidak
              langsung) menggunakan konten Layanan DAISI, dengan cara:
              <br />
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>mengancam, kasar, melecehkan, menguntit, atau memfitnah</li>
                <li>menipu, palsu, menyesatkan, atau curang</li>
                <li>
                  invasif terhadap privasi seseorang atau melanggar hak-hak
                  hukum (privasi dan publikasi)
                </li>
                <li>
                  berisi konten yang vulgar, tidak senonoh, cabul, atau materi
                  melanggar hukum
                </li>
                <li>melanggar hak kekayaan intelektual pihak ketiga lainnya</li>
                <li>
                  mempublikasi, mengirim, mengunggah, atau mendistribusikan
                  dengan cara lain setiap perangkat lunak, lagu, video, atau
                  materi lainnya yang dilindungi secara hukum kekayaan
                  intelektual kecuali Pengguna telah memiliki hak dan
                  persetujuan sebelumnya
                </li>
                <li>
                  mengunggah file yang berisikan virus, data yang rusak, atau
                  perangkat lunak atau program yang dapat merusak operasional
                  perangkat pihak lain
                </li>
                <li>
                  mengunduh file yang diketahui, atau mungkin diketahui, tidak
                  dapat didistribusikan secara hukum dengan cara tersebut
                </li>
                <li>
                  memalsukan atau menghapus atribusi penulis, penunjukkan hukum
                  atau hak milik, label yang menyatakan keaslian atau sumber
                  dari perangkat lunak, atau materi lain yang terdapat dalam
                  file yang telah diunggah
                </li>
                <li>
                  membatasi atau menghambat pengguna lain dari Layanan DAISI
                  dari menggunakan dan menikmati website kami atau Layanan DAISI
                </li>
                <li>
                  panen atau mengambil informasi tentang orang lain, termasuk
                  alamat email, nomor telepon, tanpa izin yang bersangkutan
                </li>
                <li>
                  melanggar penggunaan standar atau peraturan dari sebuah
                  entitas dengan penggunaan anda, termasuk namun tidak terbatas
                  pada ISP, ESP atau berita atau grup pengguna (contoh, termasuk
                  namun tidak terbatas pada, menghindari atau melampaui hak
                  penggunaan peralatan dan batasan dan / atau detail lokasi dan
                  identifikasi jalur)
                </li>
                <li>adalah tindakan hukum antara pihak swasta</li>
                <li>
                  tidak menggunakan layanan dengan itikad baik, missal
                  mengunggah Kontak secara berlebihan, mengirim pesan ke Kontak
                  dan menghapuskan segera setelahnya; atau
                </li>
                <li>
                  melanggar seluruh ketentuan hukum yang berlaku baik lokal,
                  nasional maupun internasional, setiap peraturan yang berlaku
                  untuk itu.
                </li>
                <li>
                  mendukung, mempromosikan, menfasilitasi atau memberikan
                  instruksi bagi pihak lain untuk melakukan tindakan melawan
                  hukum
                </li>
                <li>
                  mendukung, mempromosikan, atau memfasilitasi kebencian,
                  kekerasan, diskriminasi berdasarkan ras, warna, orientasi
                  seksual, status pernikahan, jenis kelamin atau ekspresi
                  identitas, status orang tua, agama atau kepercayaan, negara
                  asal atau nenek moyang, umur, informasi genetik, warga negara,
                  atau karakteristik lainnya yang dilindungi oleh hukum.
                </li>
              </ul>
              <br />
              Jika Pengguna menggunakan produk kami termasuk Application
              Programming Interfaces (APIs), developer tools, atau program lain
              yang terasosiasi, Pengguna wajib untuk tunduk pada ketentuan Batas
              Layanan kami. Pengguna akan menggunakan Layanan DAISI untuk
              keperluan bisnis internal anda dan tidak akan:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  dengan sengaja mengutak-atik keamanan Layanan DAISI atau
                  mengutak-atik akun customer kami;
                </li>
                <li>
                  mengakses data dalam Layanan DAISI yang bukan hak anda;{" "}
                </li>
                <li>
                  melakukan log in ke server atau akun dalam Layanan DAISI yang
                  aksesnya tidak diperbolehkan;
                </li>
                <li>
                  mencoba untuk menyelidiki, memindai atau menguji kerentanan
                  Layanan DAISI atau untuk melanggar keamanan atau ukuran
                  autentikasi tanpa izin;
                </li>
                <li>
                  dengan sengaja membuat bagian manapun dari Layanan DAISI tidak
                  dapat digunakan;
                </li>
                <li>
                  menyewakan, mendistribusikan, memberikan lisensi, menjual atau
                  mengeksploitasi secara komersial Layanan DAISI, atau
                  memberikan akses Layanan DAISI kepada pihak ketiga lainnya
                  selain yang diizinkan dalam langganan Layanan DAISI anda.
                </li>
                <li>
                  Menggunakan Layanan DAISI secara bersama-sama atau tujuan biro
                  layanan sehingga memberikan benefit kepada pihak ketiga
                  lainnya; atau
                </li>
                <li>
                  Memberikan kepada pihak ketiga versi evaluasi dari Layanan
                  DAISI tanpa persetujuan tertulis dari kami.
                </li>
              </ul>
              <br />
              <h4 className="font-bold text-xl">7. Industri Terlarang </h4>
              <br />
              Beberapa industri memiliki tingkat komplain penyalahgunaan yang
              lebih tinggi, hal ini dapat secara langsung berdampak pada
              penyediaan Layanan DAISI untuk customer lain. Untuk melindungi
              customer kami, kami berhak untuk menghentikan penggunaan anda
              untuk Layanan DAISI apabila Pengguna memiliki bidang usaha salah
              satu dari industri-industri yang dimaksud. Contoh beberapa
              industri yang dimaksud: Cryptocurrency Jasa layanan kencan dan
              pengawalan Produk farmasi Kerja dari rumah, menghasilkan uang
              secara online, dan peluang menghasilkan Layanan atau produk judi
              Multi-level marketing atau pemasaran afiliasi Daftar broker atau
              daftar layanan sewa Menjual &quot;like&quot; atau pengikut dalam
              platform media sosial
              <br />
              <br />
              <h4 className="font-bold text-xl">
                8. Penggunaan merk dagang DAISI{" "}
              </h4>
              <br />
              Kecuali Pengguna memiliki persetujuan tertulis dari kami, Pengguna
              dilarang menggunakan nama, logo, tagline, atau merk kami atau
              Layanan DAISI, atau segala kekhasan atau tag yang diterbitkan dari
              Layanan DAISI, termasuk namun tidak terbatas pada: <br />
              <ul
                role="list"
                className="marker:text-dark dark:text-secondary dark:marker:text-secondary mr-4 mt-4 list-[lower-alpha] pl-5  space-y-3 text-dark"
              >
                <li>
                  menggunakan sebagai tautan hypertext ke website lain atau
                  lokasi lain (kecuali sebagaimana disediakan atau diperbolehkan
                  oleh kami); atau
                </li>
                <li>
                  menyiratkan identifikasi dengan kami seperti karyawan,
                  kontraktor, agent atau kapasitas perwakilan lainnya. Pengguna
                  setuju untuk tidak menghapus atau mengubah seluruh hal-hal
                  yang sudah kami sediakan.
                </li>
              </ul>
              <br />
              <h4 className="font-bold text-xl">9. Ketentuan Developer </h4>
              <br />
              Jika Pengguna menggunakan alat Developer yang kami sediakan
              termasuk Application Programming Interfaces (APIs), alat
              developer, atau perangkat lunak terkait, Pengguna akan tunduk pada
              ketentuan Ketentuan Developer di{" "}
              <Link href="https://timkado.id/legal/developer" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                >
                  https://timkado.id/legal/developer
                </a>
              </Link>
              <br />
              <br />
              <h4 className="font-bold text-xl"> 10. Ketentuan Umum</h4>
              <br />
              Kami dapat segera memutus akses Pengguna terhadap Layanan DAISI
              apabila Pengguna melanggar ketentuan dalam KP ini atau tidak
              merespon kami dalam kurun waktu tertentu setelah dihubungan
              sehubungan dengan potensi pelanggaran KP ini. Kami juga dapat
              memutus akses anda sebagaimana kami jelaskan dalam Ketentuan
              Layanan Customer kami, dan jika Pengguna melanggar KP ini, kami
              dapat menghentikan perjanjian langganan Pengguna untuk alasan itu.
              Pengguna setuju bahwa kami dapat mengungkapkan informasi
              penggunaan layanan DAISI anda apabila terdapat sebuah permintaan
              dari pengadilan, dari peraturan, atau proses hukum lainnya. Jika
              terdapat permintaan pengungkapan tersebut kami akan memberitahukan
              kepada Pengguna, kecuali kami diminta untuk melakukan pengungkapan
              secara rahasia. <br />
              <br />
              Kami tidak wajib, namun dapat, menghilangkan setiap materi yang
              dilarang dan melarang akses untuk pihak yang melanggar KP ini.
              Kami memiliki hak untuk itu. <br />
              <br />
              Kami dapat memperbaharui dan mengganti setiap bagian atau pun
              seluruh bagian dari KP ini. Jika kami memperbaharui atau mengganti
              KP ini, maka versi KP yang terbaru akan terdapat di{" "}
              <Link href="https://timkado.id/legal/terms">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                >
                  https://timkado.id/legal/terms
                </a>
              </Link>
              . Jika Pengguna merupakan pelanggan DAISI, kami akan
              memberitahukan melalui Notifikasi dalam portal aplikasi DAISI yang
              digunakan untuk mengakses langganan DAISI anda. Jika Pengguna
              tidak memiliki langganan DAISI, kami akan memberitahu melalui
              postingan di website kami. Ketika terdapat pembarahuan versi KP
              ini, &quot;Tanggal Perubahan Terakhir&quot; yang ada dibagian atas
              akan berubah sesuai dengan tanggal terbaru. Kami menyarankan agar
              Pengguna memeriksa KP ini dari waktu ke waktu.
            </div>
            {/* //----------end indo-------------// */}
            <div
              id="p-term-egls"
              className="border-2  dark:text-secondary hidden px-8 py-6 max-h-[400px] text-dark border-slate-300 shadow-lg rounded-md overflow-y-auto  w-full"
            >
              This DAISI Acceptable Use Policy (&quot;AUP&quot;) applies to the
              use of any product, service or website provided by us (PT. Timkado
              Sejahtera Indonesia), whether we provide it directly or use
              another party to provide it to you (each, a &quot;DAISI
              Service&quot;. This AUP is designed to ensure compliance with the
              laws and regulations that apply to the DAISI Service. This AUP
              also protects the interests of all of our clients and their
              customers, as well as our goodwill and reputation. These terms are
              so important that we cannot provide the DAISI Service unless you
              agree to them. By using the DAISI Service, you are agreeing to
              these terms.
              <br />
              <br />
              If you are using any DAISI Service, this AUP applies to you. Every
              client of ours agrees to abide by this AUP and is responsible for
              any violations. You are not allowed to assist or engage others in
              a way that would violate this AUP. We will enforce and ensure
              compliance with this AUP by using methods we consider to be
              appropriate, such as complaint and email failure monitoring. We
              may also suspend or terminate your use of DAISI Services pursuant
              to our Customer Terms of Service for violations of this AUP.
              <br />
              <br />
              We periodically update these terms and we will let you know when
              we do through the Notification app in the DAISI portal used to
              access your DAISI subscription (if you have one), or by posting a
              revised copy on our website. You agree to review the AUP on a
              regular basis and always remain in compliance.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                1. Reporting Suspected Violations{" "}
              </h4>
              <br />
              We encourage recipients of text messages sent using the DAISI
              Service to report suspected violations of this AUP to us by
              forwarding a copy of the received text by email to{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:info@timkado.id"
              >
                info@timkado.id
              </a>{" "}
              . We have a policy to investigate all of these reports and to
              respond in the way we consider appropriate. <br />
              <br /> If you know of or suspect a violation of this AUP, you will
              promptly notify us in writing of the known or suspected violation
              of this AUP.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                2. Prohibited Text Messaging Actions{" "}
              </h4>
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-[lower-alpha] pl-5  space-y-3 text-dark"
              >
                <li>
                  You may not use DAISI to send spam. Spam can be in the form of
                  bulk text or one to one commercial text. <br />
                  <br />
                  Bulk texting is spam when it is unsolicited. Unsolicited means
                  the recipient has not granted verifiable permission for the
                  message to be sent. Bulk means that the message is sent as
                  part of a larger collection of messages that have
                  substantively similar content. <br />
                  <br />
                  One-to-one commercial text messaget are spam and violate AUP.
                  One-to-one commercial emails are also considered Spam if the
                  data processed for purposes of sending that email is in scope
                  of the General Data Protection Regulation (‘GDPR’) and you
                  fail to provide notice to individuals and establish a lawful
                  basis of processing. <br />
                  <br />
                  You may not use the DAISI Service in any way (directly or
                  indirectly) to send, transmit, handle, distribute or deliver:
                  <br />
                  <ul
                    role="list"
                    className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
                  >
                    <li>spam in violation applicable law;</li>
                    <li>
                      text messaging to a phone number obtained via Internet
                      harvesting methods or any surreptitious methods (e.g.,
                      scraping or harvesting);
                    </li>
                    <li>
                      text messaging that in violation of the General Data
                      Protection Regulation (GDPR)
                    </li>
                  </ul>
                </li>

                <li>
                  You may not use any misleading or false names, addresses,
                  phone number, or subject line. <br /> <br /> Text sent, or
                  caused to be sent to or through the DAISI Service may not:{" "}
                  <br />
                  <ul
                    role="list"
                    className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
                  >
                    <li>use or contain invalid or forged headers;</li>
                    <li>
                      use or contain invalid or non-existent domain names;
                    </li>
                    <li>
                      employ any technique to otherwise misrepresent, hide or
                      obscure any information in identifying the point of origin
                      or the transmission path;
                    </li>
                    <li>use other means of deceptive addressing;</li>
                    <li>
                      use a third party&apos;s internet domain name without
                      their consent, or be relayed from or through a third
                      party&apos;s equipment without the third party&apos;s
                      permission;
                    </li>
                    <li>
                      contain false or misleading information in the subject
                      line or otherwise contain false or misleading content; or{" "}
                    </li>
                    <li>
                      {" "}
                      use our trademark(s), tagline(s), or logo(s) without our
                      prior written consent.
                    </li>
                  </ul>
                </li>
                <li>
                  You may not email purchased lists. You are prohibited from
                  using the DAISI Service to send:
                  <ul
                    role="list"
                    className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
                  >
                    <li>purchased, rented, or borrowed lists, and </li>
                    <li>
                      lists that are likely to result in an excessive number of
                      unsubscribe requests or Spam complaints or notices, as
                      determined by acceptable industry practices.
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
              <h4 className="font-bold text-xl">
                3. Text Messaging Opt-out Requirements{" "}
              </h4>
              <br />
              You warrant that each text you send or is sent for you using the
              DAISI Service will contain: <br />
              (a) header information that is not false or misleading; and
              <br />
              (b) an advisement that the recipient may unsubscribe, opt-out or
              otherwise demand that use of its information for unsolicited,
              impermissible and/or inappropriate communication(s) as described
              in this AUP be stopped (and how the recipient can notify you that
              it wants to unsubscribe, opt-out, or stop this use of its
              information). These requirements may not apply if the text sent is
              a transactional text and these requirements are not otherwise
              required by law. You warrant that you will promptly comply with
              all opt-out, unsubscribe, &quot;do not call&quot; and &quot;do not
              send&quot; requests.
              <br />
              <br />
              <h4 className="font-bold text-xl"> 4. Telephone Marketing</h4>
              <br />
              You must comply with all laws relating to telephone marketing,
              including without limitation those specifically referenced in the
              ‘Proper Usage of DAISI Service’ section below. You must comply
              with all laws related to the recording of phone calls and ensure
              all proper consent to record is obtained prior to making any such
              recording. If you use the DAISI Service to place telephone calls,
              you must also comply with all applicable industry standards. You
              are prohibited from using or permitting access to use the DAISI
              Service to make emergency calls or to provide or seek emergency
              services.
              <br />
              <br />
              <h4 className="font-bold text-xl"> 5. No Disruption</h4>
              <br />
              You agree not to use the DAISI Service in a way that impacts the
              normal operation, privacy, integrity or security of another&apos;s
              property. Another’s property includes another’s account(s), domain
              name(s), URL(s), website(s), network(s), system(s), facilities,
              equipment, data, other information, or business operations. You
              also agree not to use the DAISI Service to gain unauthorized
              access to, use, monitor, make an unauthorized reference to,
              another’s property, unless you have the appropriate express prior
              consent to do so. Examples of prohibited actions include (without
              limitation): hacking, spoofing, denial of service, text-bombing
              and/or sending any text that contains or transmits any virus or
              propagating worm(s), or any malware, whether spyware, adware or
              other such file or program. You also agree not to use the DAISI
              Service in a way that causes or may cause any DAISI IP addresses,
              DAISI domains, or DAISI customer domains to be blacklisted. These
              restrictions apply regardless of your intent and whether or not
              you act intentionally or unintentionally.
              <br />
              <br />
              <h4 className="font-bold text-xl">
                {" "}
                6. Proper Usage of the DAISI Service
              </h4>
              <br />
              You will respect the limits that apply to your use the DAISI
              Service as specified in the Product and Services Catalog available
              at{" "}
              <Link href="https://timkado.id/legal/SLA">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                >
                  https://timkado.id/legal/SLA
                </a>
              </Link>{" "}
              (the &quot;Service Limits&quot;). We may update or change these
              Service Limits by updating website, so we encourage you to review
              this page periodically. <br />
              <br />
              In addition, and without limiting the other requirements in this
              AUP, you may not (directly or indirectly) use the DAISI Service
              with content, or in a manner that:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-[square] pl-5  space-y-3 text-dark"
              >
                <li>
                  is threatening, abusive, harassing, stalking, or defamatory;
                </li>
                <li>is deceptive, false, misleading or fraudulent;</li>
                <li>
                  is invasive of another&apos;s privacy or otherwise violates
                  another&apos;s legal rights (such as rights of privacy and
                  publicity);
                </li>
                <li>
                  contains vulgar, obscene, indecent or unlawful material;
                </li>
                <li>
                  infringes a third party&apos;s intellectual property right(s);
                </li>
                <li>
                  publishes, posts, uploads, or otherwise distributes any
                  software, music, videos, or other material protected by
                  intellectual property laws unless you have all necessary
                  rights and consents to do so;
                </li>
                <li>
                  uploads files that contain viruses, corrupted files, or any
                  other similar software or programs that may damage the
                  operation of another person&apos;s computer;
                </li>
                <li>
                  downloads any file that you know, or reasonably should know,
                  cannot be legally distributed in that way;
                </li>
                <li>
                  falsifies or deletes any author attributions, legal or
                  proprietary designations, labels of the origin or source of
                  software, or other material contained in a file that is
                  uploaded;
                </li>
                <li>
                  restricts or inhibits any other user of the DAISI Service from
                  using and enjoying our website and/or the DAISI Service;
                </li>
                <li>
                  harvests or otherwise collects information about others,
                  including e-mail addresses, phone number without their
                  consent;
                </li>
                <li>
                  violates the usage standards or rules of an entity affected by
                  your use, including without limitation any ISP, ESP, or news
                  or user group (and including by way of example and not
                  limitation circumventing or exceeding equipment use rights and
                  restrictions and/or location and path identification detail);
                </li>
                <li>is legally actionable between private parties; </li>
                <li>
                  is not a good faith use of the service, such as uploading
                  Contacts in excessively, texting those Contacts and then
                  purging them shortly thereafter; and/or
                </li>
                <li>
                  is in violation of any applicable local, state, national or
                  international law or regulation related.
                </li>
                <li>
                  encourages, promotes, facilitates or instructs others to
                  engage in illegal activity;
                </li>
                <li>
                  promotes, encourages, or facilitates: hate speech, violence,
                  discrimination based on race, color, sexual orientation,
                  marital status, gender or identity expression, parental
                  status, religion or creed, national origin or ancestry, sex,
                  age, physical or mental disability, veteran status, genetic
                  information, citizenship and/or any other characteristic
                  protected by law.
                </li>
              </ul>
              <br />
              If you use any of our developer tools including Application
              Programming Interfaces (APIs), developer tools, or associated
              software, you will comply with our Service Limits. <br />
              <br />
              You will use the DAISI Service for your internal business purposes
              and will not:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  willfully tamper with the security of the DAISI Service or
                  tamper with our customer accounts;
                </li>
                <li>access data on the DAISI Service not intended for you;</li>
                <li>
                  log into a server or account on the DAISI Service that you are
                  not authorized to access;
                </li>
                <li>
                  attempt to probe, scan or test the vulnerability of any DAISI
                  Service or to breach the security or authentication measures
                  without proper authorization;
                </li>
                <li>
                  willfully render any part of the DAISI Service unusable;
                </li>
                <li>
                  lease, distribute, license, sell or otherwise commercially
                  exploit the DAISI Service or make the DAISI Service available
                  to a third party other than as contemplated in your
                  subscription to the DAISI Service;
                </li>
                <li>
                  use the DAISI Service for timesharing or service bureau
                  purposes or otherwise for the benefit of a third party; or
                </li>
                <li>
                  provide to third parties any evaluation version of the DAISI
                  Service without our prior written consent.
                </li>
              </ul>
              <br />
              <h4 className="font-bold text-xl"> 7. Restricted Industries</h4>
              <br />
              Some industries have higher than average abuse complaints, which
              can directly impact our ability to provide the DAISI Service to
              other customers. To protect our customers, we reserve the right to
              discontinue your use of the DAISI Services if you are in one of
              these industries. Some examples include: Cryptocurrency Escort and
              dating services Pharmaceutical products Work from home, make money
              online, and lead generating opportunities Gambling services or
              products Multi-level marketing or affiliate marketing List brokers
              or list rental services Selling &aposLikes&apos or followers for a
              social media platform
              <br />
              <br />
              <h4 className="font-bold text-xl">8. DAISI Trademark </h4>
              <br />
              Use Unless you have our express prior written permission, you may
              not use any name, logo, tagline or other mark of ours or the DAISI
              Service, or any identifier or tag generated by the DAISI Service,
              including without limitation:
              <br />
              (a) as a hypertext link to any website or other location (except
              as provided for or enabled expressly by us); or <br />
              (b) to imply identification with us as an employee, contractor,
              agent or other similar representative capacity. You also agree not
              to remove or alter any of these items as we may have provided or
              enabled.
              <br />
              <br />
              <h4 className="font-bold text-xl"> 9. Developer Terms</h4>
              <br />
              If you use any of our developer tools including Application
              Programming Interfaces (APIs), developer tools, or associated
              software, you will comply with our Developer Terms at{" "}
              <Link href="https://timkado.id/legal/developer" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                >
                  https://timkado.id/legal/developer
                </a>
              </Link>
              <br />
              <br />
              <h4 className="font-bold text-xl">10. General Terms </h4>
              <br />
              We may immediately suspend your access to the DAISI Service if you
              breach this AUP or don’t respond to us in a reasonable period
              after we’ve contacted you about a potential breach of this AUP. We
              may also suspend your access as we explain in our Customer Terms
              of Service and, if you breach this AUP, we may terminate your
              subscription agreement for cause. You acknowledge we may disclose
              information regarding your use of any DAISI Service to satisfy any
              law, regulation, government request, court order, subpoena or
              other legal process. If we make this type of required disclosure
              we will notify you, unless we are required to keep the disclosure
              confidential.
              <br /> <br />
              We are not obligated to, but may choose to, remove any prohibited
              materials and deny access to any person who violates this AUP. We
              further reserve all other rights.
              <br /> <br /> We may update and change any part or all of this
              AUP. If we update or change this AUP, the updated AUP will be
              posted at{" "}
              <Link href="https://timkado.id/legal/terms">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                >
                  https://timkado.id/legal/terms
                </a>
              </Link>
              . If you have a DAISI subscription, we will let you know through
              the Notification app in the DAISI portal used to access your DAISI
              subscription. If you do not have a DAISI subscription, we will let
              you know by posting the revised copy on our website. When we
              change this AUP, the &quot;Last Modified&quot; date above will be
              updated to reflect the date of the most recent version. We
              encourage you to review this AUP periodically.
            </div>
          </div>
        </div>
      </div>
      <Script src=".\js\scripttermaccept.js"></Script>
    </section>
  );
}

export default termsaccept;
