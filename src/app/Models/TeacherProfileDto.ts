import {Teacher} from "./Teacher";
import {Subject} from "./Subject";
import {Institute} from "./Institute";

export class TeacherProfileDto{
  teacher: Teacher;
  lectureSubjects: Subject[];
  practicalSubjects: Subject[];
  institute: Institute;
}
