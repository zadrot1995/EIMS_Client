import {Guid} from "guid-typescript";
import {ImageContent} from "./ImageContent";
import {Institute} from "./Institute";
import {Post} from "./Post";
import {Group} from "./Group";
import {Subject} from "./Subject";

export class UserProfile {
  id: Guid;
  firstName: string;
  secondName: string;
  group: Group;
  subjects: Subject[];
  institute: Institute;
}
