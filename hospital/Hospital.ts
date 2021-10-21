import { Nurse } from "./Nurse";

export class Hospital {
  private name: String;
  private nurses: Nurse[];

  constructor(name: String, nurses: Nurse[]) {
    this.name = name;
    this.nurses = nurses;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getNurses(): Nurse[] {
    return this.nurses;
  }

  public setNurses(nurse: Nurse): void {
    this.nurses.push(nurse);
  }
}
