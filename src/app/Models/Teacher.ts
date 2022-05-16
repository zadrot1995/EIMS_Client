import {Guid} from "guid-typescript";
import {Institute} from "./Institute";

export class Teacher {
  id: string;
  firstName: string;
  secondName: string;
  userType: string;
  degree: string;
  education: string;
  about: string;
  institute: Institute;
  instituteId: string;
  userPhoto: string;
}
