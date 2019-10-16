import Billboard from '../pages/Billboard/Billboard.vue'
import Cinema from '../pages/Cinema/Cinema.vue'
import Hotspot from '../pages/Hotspot/Hotspot.vue'
import Msite from '../pages/msite/Msite.vue'
import Perform from '../pages/Perform/Perform.vue'
import Movies from '../pages/Movies/Movie.vue'
import Market from '../pages/Market/Market.vue'


export default [
  {
    path:'/perform',
    component:Perform

  },
  {
    path:'/movies',
    component:Movies
  },

  {
    path:'/billboard',
    component:Billboard
  },
  {
    path:'/cinema',
    component:Cinema
  },
  {
    path:'/hotspot',
    component:Hotspot
  },
  {
    path:'/market',
    component:Market
  },
  {
    path:'/msite',
    component:Msite
  }


]