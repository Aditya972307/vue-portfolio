<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">Portfolio</div>

      <ul :class="['navbar-links', { show: isMenuOpen }]">
        <li>
          <router-link to="/beranda" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="nav-link" active-class="active">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        </li>
      </ul>

      <div class="navbar-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 6px 12px;
  border-radius: 0;
  background: none;
  border: none;
}

.nav-link:hover {
  color: red;
}

.nav-link.active {
  color: #000;
  font-weight: 600;
}


.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.navbar-toggle span {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .navbar-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-100%);
    opacity: 0;
    flex-direction: column;
    background: #fff;
    padding: 1rem 2rem;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 999;
  }

  .navbar-links.show {
    transform: translateY(60px);
    opacity: 1;
  }

  .navbar-toggle {
    display: flex;
  }

  .nav-link {
    padding: 1rem;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
}
</style>