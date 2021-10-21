import { Benefitie } from "./Benefitie";

export abstract class Nurse {
  private name: String;
  private salary: number;
  private benefities: Benefitie[];

  constructor(name: String, salary: number, benefities: Benefitie[]) {
    this.name = name;
    this.salary = salary;
    this.benefities = benefities;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getBenefities(): Benefitie[] {
    return this.benefities;
  }

  protected getBrutSalary(): number {
    return this.salary;
  }

  public abstract getLiquidSalary(): number;
}
