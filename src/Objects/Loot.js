import Entity from '../World/Entity';

class Loot extends Entity {
  action(verb, world) {
    if (verb === 'bump') {
      world.player.add(this);
      world.remove(this);
    }
    if (verb === 'drop') {
      console.log('drop', this);
    }
  }
}

export default Loot;