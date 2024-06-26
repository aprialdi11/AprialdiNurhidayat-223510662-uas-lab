import { createApp } from 'vue'
import App from './App.vue' // Ubah dari menjadi from
import router from './router' // Ubah dari menjadi from
import { Quasar } from 'quasar' // Ubah dari menjadi from
import quasarUserOptions from './quasar-user-options' // Ubah dari menjadi from
const app = createApp(App)
app.use(router)
app.use(Quasar, quasarUserOptions)
app.mount('#app')
