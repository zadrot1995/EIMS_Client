import { Guid } from 'guid-typescript';
import {University} from "./University";

export class Institute {
  id: Guid;
  name: string;
  about: string;
  universityId: Guid;
  university: University;
}
