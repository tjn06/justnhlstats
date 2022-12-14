import Player from '../models/Player';

export const PLAYERS = [
  new Player(1, 'Peter Forsberg', 'Colorado Avalanche', 82, 25, 87, require('../assets/images/players/peterforsberg.jpeg'), 21, 'C'),
  new Player(2, 'Aleksandr Ovetjkin', 'Edmonton Oilers', 82, 32, 45, require('../assets/images/players/aleksandrovetjkin.jpeg'), 88, 'F'),
  new Player(3, 'Wayne Gretzky', 'Los Angeles Kings', 82, 65, 110, require('../assets/images/players/waynegretzky.jpeg'), 72, 'D'),
  new Player(4, 'Mario Lemiux', 'Toronto Maple Leafs', 82, 64, 129, require('../assets/images/players/mariolemiux.jpeg'), 23, 'G'),
  new Player(5, 'Eric Lindros', 'Colorado Avalanche', 82, 38, 45, require('../assets/images/players/ericlindros.jpeg'), 67, 'C'),
  new Player(6, 'Mikael Renberg', 'Florida Panthers', 82, 32, 30, require('../assets/images/players/mikaelrenberg.jpeg'), 49, 'F'),
  new Player(7, 'Pavel Bure', 'Detroit Red Wings', 82, 32, 30, require('../assets/images/players/pavelbure.jpeg'), 49, 'F'),
];
