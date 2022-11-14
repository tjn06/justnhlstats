
const BASE_PATH_TEAMS = '../../assets/images/teams/';
const BASE_PATH_PLAYERS = '../../assets/images/players/';

const availibleImages = [
   {name: 'avalanche', path: require(`${BASE_PATH_TEAMS}avalanche.png`)},
   {name: 'kings', path: require(`${BASE_PATH_TEAMS}kings.png`)},
   {name:'mapleleafs', path: require(`${BASE_PATH_TEAMS}mapleleafs.png`)},
   {name:'oilers', path: require(`${BASE_PATH_TEAMS}oilers.png`)},
   {name:'panthers', path: require(`${BASE_PATH_TEAMS}panthers.png`)},
   {name:'redwings', path: require(`${BASE_PATH_TEAMS}redwings.png`)},
]

const availiblePlayerImages = [
  {name: 'Aleksandr Ovetjkin', path: require(`${BASE_PATH_PLAYERS}aleksandrovetjkin.jpeg`)},
  {name: 'Eric Lindros', path: require(`${BASE_PATH_PLAYERS}ericlindros.jpeg`)},
  {name:'Mario Lemiux', path: require(`${BASE_PATH_PLAYERS}mariolemiux.jpeg`)},
  {name:'Mikael Renberg', path: require(`${BASE_PATH_PLAYERS}mikaelrenberg.jpeg`)},
  {name:'Pavel Bure', path: require(`${BASE_PATH_PLAYERS}pavelbure.jpeg`)},
  {name:'Wayne Gretzky', path: require(`${BASE_PATH_PLAYERS}waynegretzky.jpeg`)},
]

export default availibleImages
