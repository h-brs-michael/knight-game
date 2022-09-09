import { doGame, doRound, getRandomDmg } from "../src/helpers";
import { Knight } from "../src/knight.interface";

describe("helpers", () => {
  describe("getRandomDmg()", () => {
    it("returns dmg > 0 and < 5", () => {
      const dmg = getRandomDmg();

      expect(dmg).toBeGreaterThan(0);
      expect(dmg).toBeLessThanOrEqual(10);
    });
  });

  describe("doRound()", () => {
    it("removes dead knights after dmg", () => {
      const k1 = new Knight("Helmi", 1);
      const k2 = new Knight("Nummer Zwei", 6);

      const knights = [k1, k2];
      const result = doRound(knights);

      expect(result.map((k) => k.name)).toStrictEqual(["Nummer Zwei"]);
    });

    it("returns knights unchanged if only one knight is fighting", () => {
      const k1 = new Knight("Helmi", 1);

      const knights = [k1];
      const result = doRound(knights);

      expect(result).toStrictEqual([k1]);
    });

    it("death knight does not fight back", () => {
      const k1 = new Knight("Helmi", 1);
      const k2 = new Knight("Helmi2", 0);

      const knights = [k1, k2];
      const result = doRound(knights);

      expect(result.length).toBe(1);
      expect(result).toStrictEqual([k1]);
    });
  });

  describe("doGame()", () => {
    it("returns winner", () => {
      const k1 = new Knight("Helmi", 1);
      const k2 = new Knight("Nummer Zwei", 6);
      const k3 = new Knight("Nummer drei", 10);

      const knights = [k1, k2, k3];
      const result = doGame(knights);

      expect(result.length).toBe(1);
    });
  });
});
