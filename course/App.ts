import { Course } from "./Course";
import { Discipline } from "./Discipline";
import { Professor } from "./Professor";

const professor1 = new Professor("Jesiel");
const web1 = new Discipline("Web1 front-end", professor1);
const web2 = new Discipline("Web2 back-end", professor1);

const professor2 = new Professor("Messias");
const mobile = new Discipline("IA", professor2);

const course = new Course("web");
course.addDiscipline(web1);
course.addDiscipline(web2);
course.addDiscipline(mobile);

console.log("Curso", course);
