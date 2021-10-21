import { Hospital } from "./Hospital";
import { PF } from "./PF";
import { PJ } from "./PJ";

const pj = new PJ("Brayan", 3500, "00.000.000/0000-00");
const pf = new PF("Ramos", 10000, "000.000.000-00");

console.log("Salario do PJ", pj.getLiquidSalary());
console.log("Salario do PF", pf.getLiquidSalary());

const hospital = new Hospital("HRJL", [pj, pf]);

console.log("Hospital", hospital);
