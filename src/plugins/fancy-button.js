import FancyButton from '../components/FancyButton.vue'

export default {
    install: (app, options) => {
        app.component('fancy-button', FancyButton)
    }
}
