const diseases = [
    {
      id: "jpapula",
      name: 'Jerawat papula',
      characteristics: 'Bentuk jerawat papula dapat dirasakan sebagai benjolan padat yang menimbulkan rasa nyeri. Selain itu, kulit di sekitar benjolan akan tampak memerah, tetapi tidak memiliki titik nanah pada puncaknya.',
      causes: 'Jerawat papula muncul akibat penyumbatan pori-pori karena minyak berlebih dan sel kulit mati.',
      imageUrl: "https://storage.googleapis.com/skin-diseases-api/Jerawat%20Papula.jpg"
    },
    {
      id: "jpustula",
      name: 'Jerawat pustula (nanah)',
      characteristics: 'Jerawat pustula muncul sebagai benjolan meradang berwarna kemerahan dengan bagian tengah berwarna putih. Jerawat pustula umumnya muncul di dekat kelenjar minyak di wajah, punggung, dada, dan bahu. Ukuran jerawat ini dapat bervariasi, mulai dari kecil hingga besar, serta terasa nyeri ketika disentuh.',
      causes: 'Jerawat pustula terjadi ketika sel-sel kulit mati dan minyak berlebih pada kulit menyumbat saluran kelenjar minyak. Bakteri Propionibacterium acnes juga dapat menginfeksi saluran tersebut, menyebabkan infeksi dan peradangan.',
      imageUrl: "https://storage.googleapis.com/skin-diseases-api/Jerawat%20Pustula.jpg"
    },
    {
      id: "jnodul",
      name: 'Jerawat nodul',
      characteristics: 'Jerawat nodul adalah jenis jerawat meradang yang terbentuk di lapisan bawah kulit. Jerawat ini umumnya lebih besar, lebih menyakitkan, dan lebih sulit dihilangkan daripada jenis jerawat lainnya. Jerawat nodul muncul sebagai benjolan keras yang terbentuk di bawah kulit dan terasa nyeri.',
      causes: 'Jerawat nodul terbentuk ketika sel-sel kulit mati dan minyak menyumbat pori-pori dan terinfeksi bakteri P. acne.',
      imageUrl: "https://storage.googleapis.com/skin-diseases-api/Jerawat%20Nodul.jpg"
    },
    {
      id: "jkistik",
      name: 'Jerawat kistik (batu)',
      characteristics: 'Jerawat kistik terbentuk dari penumpukan minyak dan sel kulit mati pada jaringan kulit yang paling dalam. Bentuknya lebih besar, keras, merah, dan terasa nyeri dan sakit jika disentuh.',
      causes: 'Jerawat kistik dipengaruhi oleh produksi minyak berlebih, perubahan hormon, dan faktor lain seperti kulit berminyak dan kebiasaan mengenakan pakaian yang terlalu ketat.',
      imageUrl: "https://storage.googleapis.com/skin-diseases-api/Jerawat%20Kistik.jpg"
    },
    {
      id: "jpasir",
      name: 'Jerawat pasir (bruntusan)',
      characteristics: 'Jerawat pasir ditandai dengan bintil kecil yang belum berkembang atau beruntusan. Biasanya hampir tidak terlihat tetapi terasa kasar ketika disentuh. Terkadang kulit di sekitarnya berwarna merah akibat peradangan yang parah.',
      causes: 'Jerawat pasir dapat disebabkan oleh iritasi kulit akibat gesekan dan tekanan yang berlebihan, serta penyumbatan pori-pori oleh sel kulit mati, minyak, dan bakteri.',
      imageUrl: "https://storage.googleapis.com/skin-diseases-api/Jerawat%20Pasir.jpg"
    },
    {
        id: "bopeng",
        name: "Bopeng",
        characteristics:
          "Bopeng merupakan salah satu jenis bekas jerawat yang cukup dalam pada kulit. Bopeng merupakan hasil penyembuhan jaringan di kulit yang tidak sempurna. Secara umum, bopeng dibedakan menjadi tiga kelompok besar, yaitu atropik, hipertropik, dan keloid. Bopeng atropik (atrophic scars) tampak sebagai cekungan di kulit, sedangkan bopeng hipertropik dan keloid terlihat menonjol.",
        causes:
          "Selama proses penyembuhan luka, kolagen akan diproduksi untuk memperbaiki permukaan kulit. Namun, produksi kolagen bisa terlalu banyak atau terlalu sedikit, sehingga menyebabkan terbentuknya bopeng.",
          imageUrl: "https://storage.googleapis.com/skin-diseases-api/Bopeng.jpg"
      },
      {
        id: "kputih",
        name: "Komedo putih",
        characteristics:
          "Komedo putih atau whitehead adalah jenis jerawat yang terbentuk ketika sel-sel kulit mati, minyak, dan bakteri terperangkap di dalam pori-pori. Pada komedo putih, folikel rambut juga ikut terperangkap sehingga jenis komedo ini disebut juga dengan komedo tertutup.",
        causes:
          "Penyumbatan pada pori-pori menjadi penyebab utama munculnya komedo putih. Penyumbatan dapat disebabkan oleh banyak faktor, salah satunya adalah perubahan hormon. Beberapa faktor yang dapat meningkatkan risiko terbentuknya komedo putih, yaitu: Kulit berminyak, baik karena pelembap kulit maupun cuaca yang lembap, Paparan bahan kimia, seperti isopropyl myristate, propylene glycol, dan beberapa pewarna komestik, Pecahnya folikel rambut, misalnya akibat memencet jerawat, mencuci muka secara berlebihan, peeling menggunakan bahan kimia, atau terapi laser, Makanan, terutama yang mengandung susu, serta kadar gula dan lemak yang tinggi, dan Kebiasaan merokok",
          imageUrl: "https://storage.googleapis.com/skin-diseases-api/Komedo%20Putih.jpg"
      },
      {
        id: "khitam",
        name: "Komedo hitam",
        characteristics:
          "Komedo hitam ditandai dengan benjolan kecil dan berwarna gelap yang muncul pada permukaan kulit. Komedo yang muncul biasanya menyebabkan tekstur kulit terangkat, tetapi cenderung lebih datar dibandingkan jerawat.",
        causes:
          "Komedo hitam atau blackhead terjadi karena adanya penyumbatan sebum (minyak) dan sel-sel kulit mati yang telah mengeras, serta tampak menonjol dan berwarna gelap akibat paparan udara. Komedo hitam disebut juga dengan komedo terbuka, karena kulit di atas benjolannya telah terbuka, berbeda dengan komedo putih yang benjolannya masih tertutup hingga terlihat putih.",
          imageUrl: "https://storage.googleapis.com/skin-diseases-api/Komedo%20Hitam.jpg"
      },
      {
        id: "sehat",
        name: "Kulit sehat",
        characteristics:
          "- Warna kulit merata, Tekstur kulit kenyal, Kulit terhidrasi dengan baik, Tidak merasakan sensasi aneh pada kulit, Tidak berjerawat dan garis halus, Bercahaya dan segar, Kulit terasa lembut dan halus",
          imageUrl: "https://storage.googleapis.com/skin-diseases-api/Kulit%20Sehat.jpg"
      }
    ];

module.exports = diseases;