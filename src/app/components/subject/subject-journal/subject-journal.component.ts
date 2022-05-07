import {Component, Inject, OnInit} from '@angular/core';
import {Subject} from "../../../Models/Subject";
import {Teacher} from "../../../Models/Teacher";
import {Group} from "../../../Models/Group";
import {HttpBaseService} from "../../../services/httpBase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {Guid} from "guid-typescript";
import {ApiRouts} from "../../../constants";
import {Journal} from "../../../Models/Journal";
import {Mark} from "../../../Models/Mark";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Student} from "../../../Models/Student";
import * as XLSX from 'xlsx';
import {JournalService} from "../../../services/journal.service";
const { read, write, utils } = XLSX;
type AOA = any[][];

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-subject-journal',
  templateUrl: './subject-journal.component.html',
  styleUrls: ['./subject-journal.component.css']
})
export class SubjectJournalComponent implements OnInit {

  selectedFile = null;
  journal = new Journal();
  subjectId: string;
  groupId: string;
  result: object;
  loading = true;
  practicColCount = 0;
  availableTeachers: Teacher[];
  availableGroups: Group[];
  data: AOA;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  constructor(public httpBaseService: HttpBaseService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private location: Location,
              public dialog: MatDialog,
              public journalService: JournalService
  ) {
  }

  ngOnInit(): void {
    this.subjectId = Guid.parse(this.route.snapshot.paramMap.get('subjectId')).toString();
    this.groupId = Guid.parse(this.route.snapshot.paramMap.get('groupId')).toString();

    this.httpBaseService.Get(ApiRouts.marks + '/getMarks/' + this.subjectId + "/" + this.groupId)
      .subscribe(x => {
        this.journal = x as Journal;
        console.log(x);
        let lenghts = [];
        for (let y of this.journal.journalRows)
        {
          lenghts.push(y.practicMarks.length);
        }

        this.practicColCount = Math.max.apply(null, lenghts);
        for (let y of this.journal.journalRows){
          if(y.practicMarks.length < this.practicColCount){
            for (let i = y.practicMarks.length; i < this.practicColCount; i++){
              let mark = new Mark();
              mark.value = 0;
              y.practicMarks.push(mark);
            }
          }
        }
        console.log("PracticColCount: " + this.practicColCount);
        this.loading = false;
      });
  }

  editSubject() {
    this.loading = true;
  }

  openDialog(student: Student): void {
    let mark = new Mark();
    mark.studentId = student.id;
    mark.subjectId = this.subjectId;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: mark,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      mark = result;
      if (mark !== undefined){
        console.log(mark);
        this.httpBaseService.Post(mark, ApiRouts.marks).subscribe(x =>
        {
          window.location.reload();
        });
      }
    });
  }

  openDialogEditMark(mark: Mark): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: mark,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined){
        console.log(result);
        this.httpBaseService.Put(result, ApiRouts.marks + "/" + mark.id).subscribe(x =>
        {
          window.location.reload();
        });
      }
    });
  }


  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.journalService.XlsxToJournal(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  export(): void {

  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Mark,
    public httpBaseService: HttpBaseService,
) {}

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }
  deleteMark(markId){

    this.httpBaseService.Delete(ApiRouts.marks + "/" + markId)
      .subscribe(x =>
      {
        this.dialogRef.close();
      });
  }
}
