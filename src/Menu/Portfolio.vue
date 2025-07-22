<template>
  <section class="portfolio">
    <div class="about-section">
      <h1>Portfolio</h1>
    </div>

    <div class="about-content">
      <p>
        Saya telah terlibat dalam beberapa proyek pembuatan website secara individu.
        Portofolio ini berisi ringkasan pengalaman saya dalam mengembangkan berbagai jenis website.
      </p>
    </div>

    <section class="projects-section">
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import homeImg from '@/assets/home.png'
import loginImg from '@/assets/login.png'
import dashboardImg from '@/assets/dashboard.png'
import santriImg from '@/assets/profilsantri.png'
import laporanImg from '@/assets/laporan.png'
import detailImg from '@/assets/detail_laporan.png'

export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          image: homeImg,
          title: 'Project 1',
          description: 'Membuat halaman Home dengan HTML & CSS',
        },
        {
          image: loginImg,
          title: 'Project 2',
          description: 'Membuat halaman Login dengan HTML & CSS',
        },
        {
          image: dashboardImg,
          title: 'Project 3',
          description: 'Membuat halaman Dashboard dengan HTML & CSS',
        },
        {
          image: santriImg,
          title: 'Project 4',
          description: 'Membuat halaman Profil Santri dengan HTML & CSS',
        },
        {
          image: laporanImg,
          title: 'Project 5',
          description: 'Membuat halaman Laporan dengan HTML & CSS',
        },
        {
          image: detailImg,
          title: 'Project 6',
          description: 'Membuat halaman Detail Laporan dengan HTML & CSS',
        },
      ],
    }
  },
}
</script>

<style scoped>
.portfolio {
  padding: 40px 10%;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e4f5);
}

.about-section h1 {
  font-size: 2.5rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.about-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: #555;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.project-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  object-fit: cover;
}

.project-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
}

.project-card p {
  font-size: 0.95rem;
  color: #555;
}
</style>
