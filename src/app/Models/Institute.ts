import { Guid } from 'guid-typescript';
import {University} from "./University";
import {ImageContent} from "./ImageContent";
import {Teacher} from "./Teacher";
import {Group} from "./Group";
import {Subject} from "./Subject";

export class Institute {
  id: Guid;
  name: string;
  about: string;
  universityId: string;
  university: University;
  imageContents: ImageContent[];
  teachers: Teacher[];
  groups: Group[];
  subjects: Subject[];
}
