import {Guid} from "guid-typescript";
import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {Institute} from "./Institute";

export class Group {
  id: string;
  name: string;
  students: Student[];
  curator: Teacher;
  curatorId: Guid;
  institute: Institute;
  instituteId: string;
}
