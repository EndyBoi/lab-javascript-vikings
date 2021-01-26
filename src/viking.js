// Soldier
class Soldier {
  constructor(health, strength) {
    this.name = ""
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  battleCry() {
    return "Odin Owns You All!"
  }
  receiveDamage(damage) {
    this.health -= damage
    return (
      (this.health > 0 &&
        `${this.name} has received ${damage} points of damage`) ||
      `${this.name} has died in act of combat`
    )
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
    this.name = "A Saxon"
  }
  receiveDamage(damage) {
    this.health -= damage
    return (
      (this.health > 0 &&
        `${this.name} has received ${damage} points of damage`) ||
      `${this.name} has died in combat`
    )
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }
  vikingAttack() {
    let rand = Math.floor(Math.random() * this.saxonArmy.length)
    let saxon = this.saxonArmy[rand]
    let result = saxon.receiveDamage(
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength
    )
    saxon.health <= 0 && this.saxonArmy.splice(rand)
    return result
  }
  saxonAttack() {
    let rand = Math.floor(Math.random() * this.vikingArmy.length)
    let viking = this.vikingArmy[rand]
    let result = viking.receiveDamage(
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
    )
    viking.health <= 0 && this.vikingArmy.splice(rand)
    return result
  }
  //   showStatus() {
  //     if (this.vikingArmy.length === 0) {
  //       return "Saxons have fought for their lives and survived another day..."
  //     } else if (this.saxonArmy.length === 0) {
  //       return "Vikings have won the war of the century!"
  //     } else {
  //       return "Vikings and Saxons are still in the thick of battle."
  //     }
  //   }
  showStatus = () => {
    return !this.vikingArmy.length
      ? "Saxons have fought for their lives and survived another day..."
      : !this.saxonArmy.length
      ? "Vikings have won the war of the century!"
      : "Vikings and Saxons are still in the thick of battle."
  }
}
