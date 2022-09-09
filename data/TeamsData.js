import Team from '../models/Team'

export const TEAMS = [
  new Team(1, 'Edmonton Oilers', 'Western', require('../assets/images/edmonton.png')),
  new Team(2, 'Toronto Maple Leafs', 'Western', require('../assets/images/toronto.png')),
  new Team(3, 'Los Angeles Kings', 'Western', require('../assets/images/losangeles.png')),
  new Team(4, 'Florida Panthers', 'Eastern', require('../assets/images/florida.png')),
  new Team(5, 'Colorado Avalanche', 'Eastern', require('../assets/images/colorado.png')),
  new Team(6, 'Detroit Red Wings', 'Eastern', require('../assets/images/detroit.png')),
];
