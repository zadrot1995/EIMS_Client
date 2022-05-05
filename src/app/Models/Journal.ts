import {Subject} from "./Subject";
import {Student} from "./Student";
import {Group} from "./Group";
import {Mark} from "./Mark";

export class Journal {
  group: Group;
  journalRows: JournalRow[];
}


export class JournalRow {
  student: Student;
  marks: Mark[];
  practicMarks: Mark[];
  examMark: Mark;
  firstModularTestWorkMark: Mark;
  secondModularTestWorkMark: Mark;
  total: number;

}
