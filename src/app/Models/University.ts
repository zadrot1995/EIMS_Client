import { Guid } from 'guid-typescript';
import {ImageContent} from './ImageContent';

export class University {
  id: Guid;
  name: string;
  about: string;
  images: ImageContent[];
}
