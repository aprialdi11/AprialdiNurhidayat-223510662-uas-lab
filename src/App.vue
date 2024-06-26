<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
/* CSS untuk mengatur tampilan halaman */
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 30px;
  background: url('https://cdn.pixabay.com/photo/2017/02/15/10/39/sunset-2068696_960_720.jpg') no-repeat center center fixed; /* URL gambar latar belakang dengan tema alam */
  background-size: cover;
  color: rgba(255, 255, 255, 0.87); /* Warna teks agar kontras dengan latar belakang */
}

/* CSS untuk judul aplikasi */
h1 {
  color: #ffffff; /* Warna teks agar kontras dengan latar belakang baru */
  margin-bottom: 20px;
}

/* CSS untuk konten halaman */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -80px; /* Tambahkan margin top untuk memberi ruang di atas konten */
  background-color: rgba(106, 175, 189, 0.5); /* Warna latar belakang untuk konten dengan transparansi */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Menambahkan efek bayangan untuk konten */
}

/* CSS untuk tombol */
button {
  padding: 10px 20px;
  background-color: #28a745; /* Warna hijau untuk tombol sesuai tema alam */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

/* CSS untuk input */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* CSS untuk pesan loading */
.loading {
  font-style: italic;
  color: #888;
}

/* CSS untuk konten cuaca */
.weather-info {
  margin-top: 30px;
}

/* CSS untuk konten cuaca */
.weather-info p {
  margin: 10px 0;
}
</style>
