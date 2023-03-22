import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHashtag,faHouse,faBell,faEnvelope,faBookmark,faHeart,faUser,faEllipsis} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHashtag,faHouse,faBell,faEnvelope,faBookmark,faHeart,faUser,faEllipsis)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
