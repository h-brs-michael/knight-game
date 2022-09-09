export class Knight {
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  private _hitpoints: number = 10;
  public get hitpoints(): number {
    return this._hitpoints;
  }
  public set hitpoints(value: number) {
    if (value < 0) {
      throw new Error("Hitpoints need be greater equal than 0");
    }
    this._hitpoints = value;
  }

  constructor(name: string, hitpoints?: number) {
    this._name = name;
    this._hitpoints = hitpoints ?? 10;
  }

  receiveDmg(dmg: number) {
    let hitpoints = this.hitpoints - dmg;
    if (hitpoints < 0) {
      hitpoints = 0;
    }
    this.hitpoints = hitpoints;
  }

  die() {
    const deathNote = `${this.name}: oh no im dying`;
    console.log(deathNote);
  }

  isDead(): boolean {
    return this.hitpoints <= 0;
  }

  public toString = (): string => {
    return `(${this.name}, hp: ${this.hitpoints})`;
  };
}
