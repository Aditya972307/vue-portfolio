<template>
  <section class="about">
    <div class="about-image">
      <img src="../assets/about.png" alt="Foto Tentang Saya" />
    </div>

    <div class="about-text">
      <h2>About Us</h2>
      <p>
        Saya adalah seorang siswa di SMKN 6 Malang yang memiliki minat besar di bidang pengembangan web. Saya pernah menjalani praktik kerja lapangan (PKL) di Biznizo.
      </p>
      <p>
        Saya menguasai bahasa pemrograman HTML dan CSS, serta telah mengerjakan beberapa proyek aplikasi yang membantu saya memahami cara membangun antarmuka pengguna yang menarik dan responsif.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 100px 10%;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e4f5);
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 300px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    text-align: center;
    padding: 60px 5%;
  }

  .about-image img {
    width: 200px;
    border-radius: 15px;
  }
}
</style>
