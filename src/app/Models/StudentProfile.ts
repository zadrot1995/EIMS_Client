import {Guid} from "guid-typescript";
import {ImageContent} from "./ImageContent";
import {Institute} from "./Institute";
import {Post} from "./Post";
import {Group} from "./Group";
import {Subject} from "./Subject";
import {University} from "./University";
import {UserJournal} from "./UserJournal";
import {SubjectDto} from "./SubjectDto";

export class StudentProfile {
  id: string;
  firstName: string;
  secondName: string;
  group: Group;
  institute: Institute;
  university: University;
  userJournal: UserJournal;
  userPhoto: string;

}
