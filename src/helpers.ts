import { Knight } from "./knight.interface";

export function getRandomDmg(): number {
  const dmg = Math.floor(Math.random() * 5) + 1;
  return dmg;
}

function removeDeadKnights(k: Knight): boolean {
  if (k.hitpoints <= 0) {
    k.die();
    return false;
  }
  return true;
}

function fightNextKnight(knights: Knight[]): void {
  knights.forEach((knight, index, array) => {
    if (!knight.isDead()) {
      const receiver = array[index + 1] ?? array[0];
      const dmg = getRandomDmg();
      const message = `${knight} fights ${receiver} for ${dmg} damage`;
      console.log(message);
      receiver.receiveDmg(dmg);
    } else {
      const message = `${knight} is dead and cannot fight`;
      console.log(message);
    }
  });
}

export function doRound(knights: Knight[], nr: number = -1): Knight[] {
  console.log("ROUND: ", nr);
  if (knights.length === 1) {
    return knights;
  }
  fightNextKnight(knights);

  const livingKnights = knights.filter(removeDeadKnights);

  console.log("ROUND END: ", nr);
  return livingKnights;
}

export function doGame(knights: Knight[]): Knight[] {
  let currentKnights = [...knights];
  let roundCounter = 0;

  while (currentKnights.length > 1) {
    currentKnights = doRound(currentKnights, roundCounter);
    roundCounter++;

    const roundStriung = `knights after round:${roundCounter} - ${currentKnights}`;
    console.log(roundStriung);
  }

  const winner = `${currentKnights[0]?.name} is the winner!!!`;
  console.log(winner);

  return currentKnights;
}
