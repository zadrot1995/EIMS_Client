import { Guid } from 'guid-typescript';
import {University} from "./University";
import {ImageContent} from "./ImageContent";

export class Institute {
  id: Guid;
  name: string;
  about: string;
  universityId: Guid;
  university: University;
  imageContents: ImageContent[];

}
