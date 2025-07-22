<template>
<section class="home">
  <div class="home-content">
    <h1>Halo, saya <span>Ahmad Aditya Pratama</span></h1>
    
    <div class="home-buttons">
      <a href="#portfolio" class="btn">Lihat Portfolio</a>
      <a href="#contact" class="btn btn-outline">Hubungi Saya</a>
    </div>
  </div>
  
  <div class="home-image">
    <img src="../assets/profil.png" alt="Foto Profil">
  </div>
</section>

</template>

<script>
export default {}
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 110px 10%;
  height: 88vh;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e4f5);
  gap: 2rem;
}

.home-content {
  flex: 1;
}

.home-content h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.home-content h1 span {
  color: #6C9BCF;
}

.home-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  background-color: #6C9BCF;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #5588c8;
}

.btn-outline {
  background: transparent;
  color: #6C9BCF;
  border: 2px solid #6C9BCF;
}

.btn-outline:hover {
  background: #6C9BCF;
  color: white;
}

.home-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.home-image img {
  width: 300px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .home {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 5%;
  }

  .home-content h1 {
    font-size: 2rem;
  }

  .home-image img {
    width: 200px;
  }

  .home-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>