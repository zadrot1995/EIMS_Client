import {Guid} from "guid-typescript";
import {Teacher} from "./Teacher";
import {Group} from "./Group";

export class Subject {
  id: Guid;
  name: string;
  lecturer: Teacher;
  practitioner: Teacher;
  groups: Group[];
  instituteId: Guid;
}
