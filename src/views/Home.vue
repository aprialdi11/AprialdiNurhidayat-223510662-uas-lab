<template>
  <div class="centered-content">
    <div class="weather-widget">
      <div class="widget-header">
        <h2 class="widget-title">Informasi Cuaca</h2>
      </div>
      <q-input
        filled
        v-model="searchQuery"
        label="Masukkan Nama Kota"
        class="location-input"
      />
      <q-btn @click="searchWeather" class="search-button">Cari</q-btn>
      <div v-if="loading" class="loading-message">Loading data...</div>
      <div v-else-if="weatherData" class="weather-result">
        <div class="weather-info">
          <p class="city-name">{{ weatherData.name }}</p>
          <p class="temperature">{{ weatherData.main.temp }}°C</p>
          <img
            :src="getWeatherIconUrl(weatherData.weather[0].icon)"
            :alt="weatherData.weather[0].description"
            class="weather-icon"
          />
          <p class="weather-description">
            {{ weatherData.weather[0].description }}
          </p>
        </div>
        <div class="additional-info">
          <p>Kelembaban: {{ weatherData.main.humidity }}%</p>
          <p>Kecepatan Angin: {{ weatherData.wind.speed }} m/s</p>
        </div>
      </div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { QInput, QBtn } from "quasar";

export default {
  components: { QInput, QBtn },
  setup() {
    const searchQuery = ref("");
    const weatherData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const searchWeather = async () => {
      loading.value = true;
      error.value = null;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery.value}&appid=bcbc6cc1860d02bd1f4306314c08d7e0&units=metric`
        );
        if (response.data.cod !== 200) {
          throw new Error("City not found");
        }
        weatherData.value = response.data;
      } catch (error) {
        console.error(error);
        error.value =
          "Gagal mengambil data cuaca atau kota tidak ditemukan";
      } finally {
        loading.value = false;
      }
    };

    const getWeatherIconUrl = (iconCode) => {
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    return {
      searchQuery,
      weatherData,
      loading,
      error,
      searchWeather,
      getWeatherIconUrl,
    };
  },
};
</script>

<style scoped>
/* CSS untuk mengatur tampilan halaman */
:root {
  --bg-color: rgba(255, 255, 255, 0.95);
  --shadow-color: rgba(0, 0, 0, 0.2);
  --text-color: #333;
  --accent-color: #4caf50;
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Mengurangi tinggi navbar dari 100vh */
  margin-top: 90px; /* Jarak dari atas halaman */
  background: url("https://i.pinimg.com/736x/62/f6/08/62f60848d2db1b6ec6ca0a62e523c2bc.jpg") no-repeat center center fixed; /* Ganti dengan URL gambar latar belakang yang valid */
  background-size: cover;
  border-radius: 10px;
}

.weather-widget {
  width: 400px; /* Ubah nilai width sesuai dengan kebutuhan */
  padding: 20px;
  border-radius: 10px;
  background-color: var(--bg-color);
  box-shadow: 0px 4px 20px var(--shadow-color);
  text-align: center; /* Memastikan konten di tengah secara vertikal */
}

.widget-header {
  margin-bottom: 15px;
}

.widget-title {
  font-size: 1.8rem;
  color: var(--text-color);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.location-input {
  width: calc(100% - 24px); /* Sesuaikan nilai width untuk menyesuaikan dengan tombol */
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: var(--bg-color);
}

.search-button {
  width: calc(100% - 24px); /* Sesuaikan nilai width untuk menyesuaikan dengan tombol */
  padding: 12px;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 8px;
}

.search-button:hover {
  background-color: darken(var(--accent-color), 10%);
}

.loading-message {
  font-style: italic;
  color: var(--text-color);
  margin-top: 10px;
}

.weather-result {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 20px var(--shadow-color);
  background-color: var(--bg-color);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.weather-result:hover {
  box-shadow: 0px 6px 25px var(--shadow-color);
  transform: translateY(-5px);
}

.weather-info {
  margin-bottom: 15px;
}

.city-name {
  font-weight: bold;
  color: var(--text-color);
  font-size: 1.8rem;
}

.temperature {
  font-size: 3.5rem;
  color: var(--text-color);
}

.weather-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
}

.weather-description {
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.additional-info {
  margin-top: 15px;
}

.additional-info p {
  margin: 8px 0;
  color: #666;
}

.error-message {
  color: red;
  margin-top: 15px;
  font-weight: bold;
}
</style>
