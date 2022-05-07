import { Guid } from 'guid-typescript';
import {ImageContent} from './ImageContent';
import {Institute} from "./Institute";
import {Post} from "./Post";

export class University {
  id: Guid;
  name: string;
  about: string;
  imageContents: ImageContent[];
  institutes: Institute[];
  posts: Post[];
}
