import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataFormatHelper {

  constructor() { }
  shortDescription(str:string){
    if(str.length > 30){
      return str.substr(0, 200) + '...';
    }
    else {
      return str;
    }
  }
  getImageOrDefault(university) {
    if (university.imageContents.length === 0) {
      return 'assets/img/university3.png';
    }
    else {
      return 'https://localhost:44304/api/universities/image/' + university.imageContents[0].imageName;
    }
  }
}
