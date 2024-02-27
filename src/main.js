import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import i18nPlugin from './plugins/i18n'
import fancyButtonPlugin from './plugins/fancy-button.js'

const app = createApp(App);

app.use(i18nPlugin, {
    greetings: {
        hello: 'This is Sy Dinh',
    }
});
app.use(fancyButtonPlugin);

app.mount('#app');
