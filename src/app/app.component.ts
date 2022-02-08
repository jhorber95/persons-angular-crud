import {Component, TemplateRef} from '@angular/core';
import {IPerson, Person} from "./model/person";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef?: BsModalRef;
  title = 'cardift-test';

  persons: IPerson [] = [];
  person: IPerson = {...new Person()}

  personsMaps:Map<string, IPerson> = new Map();

  constructor(private modalService: BsModalService) {}


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  add() {
    const x = this.persons.find(obj => {
      return obj.dni == this.person.dni
    })

    if (x == undefined) {
      this.persons.push({...this.person});
    } else {
     this.persons = this.persons.map(p => {
        const edited = [this.person].find(({dni}) => dni === p.dni)
        return edited ? edited : p;
      })
    }

    this.person = new Person();
  }

  edit(item: IPerson, template: TemplateRef<any>) {
    this.person = {...item}
    this.modalRef = this.modalService.show(template);
  }

  delete(item: IPerson) {
    const index = this.persons.indexOf(item);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}
