import { Benefitie } from "./Benefitie";
import { Nurse } from "./Nurse";

export class PF extends Nurse {
  private cpf: String;

  constructor(name: String, salary: number, cpf: String) {
    const healthPlane = new Benefitie("Plano de Saúde");
    const vr = new Benefitie("Vr");
    const vacations = new Benefitie("Férias");

    super(name, salary, [healthPlane, vr, vacations]);
    this.cpf = cpf;
  }

  public getLiquidSalary(): number {
    const salary = super.getBrutSalary();
    const porcentagem = salary * 0.1;
    return salary - porcentagem;
  }

  public getCpf(): String {
    return this.cpf;
  }

  public setCpf(cpf: String): void {
    this.cpf = cpf;
  }
}
