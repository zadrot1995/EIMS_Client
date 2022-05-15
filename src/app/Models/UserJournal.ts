import {Group} from "./Group";
import {Subject} from "./Subject";
import {Mark} from "./Mark";


export class UserJournal {
  userJournalRows: UserJournalRow[];
}


export class UserJournalRow {
  subjectName: string;
  marks: Mark[];
  practicMarks: Mark[];
  examMark: Mark;
  firstModularTestWorkMark: Mark;
  secondModularTestWorkMark: Mark;
  total: number;
}
