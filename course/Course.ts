import { Discipline } from "./Discipline";

export class Course {
  private name: String;
  private disciplines: Discipline[] = [];

  constructor(name: String, disciplines: Discipline[] = []) {
    this.name = name;
    this.disciplines = disciplines;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getDisciplines(): Discipline[] {
    return this.disciplines;
  }

  public addDiscipline(discipline: Discipline): void {
    this.disciplines.push(discipline);
  }

  public removeDiscipline(discipline: Discipline): Boolean {
    const disciplineIndex = this.disciplines.indexOf(discipline);

    if (disciplineIndex === -1) {
      return false;
    } else {
      this.disciplines.splice(disciplineIndex, 1);
      return true;
    }
  }
}
