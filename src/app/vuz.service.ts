import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuzService {

  private vuzList: Vuz[] = [
    {vuzname: 'Мгу Механико-математический факультет "Математика" *', subj: 'Физика', point: 291},
    {vuzname: 'Мгу Механико-математический факультет "Механика" * ', subj: 'Физика', point: 287},
    {vuzname: 'Мгу Механико-математический факультет "Фундаментальная математика и математическая физика" * ', subj: 'Физика', point: 284},
    {vuzname: 'Мгу Физический факультет "Фундаментальная и прикладная физика" * ', subj: 'Физика', point: 289},
    {vuzname: 'Мгу Физический факультет "Астрономия" * ', subj: 'Физика', point: 267},
    {vuzname: 'Мгу Факультет вычислительной математики и кибернетики "Прикладная математика и информатика" *', subj: 'Физика и информатика', point: 367},
    {vuzname: 'Мгу Факультет вычислительной математики и кибернетики "Фундаментальная информатика и информационные технологии" *', subj: 'Физика и информатика', point: 371},
  ];

  constructor() { }

  addVuz(vuz: Vuz) {
    this.vuzList.push(vuz);
  }

  getVuzes() {
    return this.vuzList;
  }
}

export class Vuz {
  vuzname: string = "";
  subj: string = "";
  point: number = -1;
}