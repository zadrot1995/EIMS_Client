import {Guid} from "guid-typescript";
import {Teacher} from "./Teacher";
import {Group} from "./Group";

export class Subject {
  id: string;
  name: string;
  lecturer: Teacher;
  lecturerId: string;
  practitioner: Teacher;
  practitionerId: string;
  groups: Group[];
  instituteId: string;
}
