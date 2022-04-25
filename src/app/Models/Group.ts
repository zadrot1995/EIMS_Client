import {Guid} from "guid-typescript";
import {Student} from "./Student";
import {Teacher} from "./Teacher";

export class Group {
  id: Guid;
  name: string;
  about: string;
  students: Student[];
  curator: Teacher;
}
