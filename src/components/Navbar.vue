<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">WEATHER</router-link>
    </div>
    <div class="task-links">
      <div class="dropdown" @click="toggleDropdown">
        <div class="navbar-item"> Tugas Aldi ▼</div>
        <div class="dropdown-menu" :class="{ 'is-active': isDropdownActive }">
          <a href="https://aldi-project-cv.web.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 1</a>
          <a href="https://tugas2-pbk-223510662.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 2</a>
          <a href="https://aprialdi-nurhidayat-223510662-tugas3-pra-pbk.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 3</a>
          <a href="https://tugas4-pra-pbk-223510662.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 4</a>
          <a href="https://aprialdinurhidayat-223510662-tugas5.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 5</a>
          <a href="https://aprialdinurhidayat-223510662-tugas6.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 6</a>
          <a href="https://aprialdinurhidayat-223510662-tugas7.vercel.app/?authuser=0" class="navbar-item" target="_blank">TUGAS 7</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownActive: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.navbar {
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.navbar-item:hover {
  background-color: #1177e4;
}

.task-links {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 10px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 200px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.dropdown-menu.is-active {
  display: block;
  opacity: 1;
  pointer-events: auto;
}

.dropdown-menu .navbar-item {
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  text-decoration: none;
}

.dropdown-menu .navbar-item:hover {
  background-color: #e0f7fa;
  color: #00796b;
}

.navbar-item.active {
  background-color: #0056b3;
}

.navbar-item::before {
  content: url('https://image.flaticon.com/icons/svg/1163/1163661.svg');
  margin-right: 10px;
  width: 24px;
  height: 24px;
}
</style>
