import { Benefitie } from "./Benefitie";
import { Nurse } from "./Nurse";

export class PJ extends Nurse {
  private cnpj: String;

  constructor(name: String, salary: number, cnpj: String) {
    const healthPlane = new Benefitie("Plano de Saúde");

    super(name, salary, [healthPlane]);
    this.cnpj = cnpj;
  }

  public getLiquidSalary(): number {
    const salary = super.getBrutSalary();
    const porcentagem = salary * 0.05;
    return salary - porcentagem;
  }

  public getCnpj(): String {
    return this.cnpj;
  }

  public setCnpj(cnpj: String): void {
    this.cnpj = cnpj;
  }
}
