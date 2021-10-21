import { Professor } from "./Professor";

export class Discipline {
  private name: String;
  private professor: Professor;

  constructor(name: String, professor: Professor) {
    this.name = name;
    this.professor = professor;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getProfessor(): Professor {
    return this.professor;
  }

  public setProfessor(professor: Professor): void {
    this.professor = professor;
  }
}
