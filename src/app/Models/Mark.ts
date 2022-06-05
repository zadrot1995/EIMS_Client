import {Guid} from "guid-typescript";
import {University} from "./University";
import {ImageContent} from "./ImageContent";
import {Teacher} from "./Teacher";
import {Group} from "./Group";
import {Subject} from "./Subject";
import {Student} from "./Student";

export class Mark {
  id: string;
  subject: Subject;
  subjectId: string;
  student: Student;
  studentId: string;
  markType: string;
  value: number;
  module: number;
}
