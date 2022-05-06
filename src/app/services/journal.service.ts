import { Injectable } from '@angular/core';
import {StudentExcelDto} from "../Models/StudentExcelDto";
import {Journal, JournalRow} from "../Models/Journal";
import {Mark} from "../Models/Mark";

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }
  public XlsxToJournal(data) {
    console.log('DATA:');
    console.log(data);
    let MKR1X = 0;
    for (let j = 0; j < data[0].length; j++){
      if (data[0][j] === 'Practice'){
        MKR1X = j + 1;
        break;
      }
    }

    console.log(MKR1X);

    let i = 0
    for (let row of data) {
      if (i !== 0){
        let journalRow = new JournalRow();
        journalRow.firstModularTestWorkMark = row[MKR1X];
        journalRow.secondModularTestWorkMark = row[MKR1X + 1];
        for (let j = 2; j < MKR1X; j++){
          let mark = new Mark();
        }

      }
      i++;
    }
  }
}
