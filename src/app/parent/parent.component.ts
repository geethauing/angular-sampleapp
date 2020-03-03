import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Person } from '../docheck/docheck.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck {
  myVal:string
  
  capabilityForm: FormGroup;
  public datacheck = [];
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {    
    this.http.get('/assets/data.json').subscribe((data: any[]) => {
    this.datacheck = data;
    console.log(this.datacheck);
      this.capabilityForm = this.fb.group({
        capabilities: this.fb.array(data.map(datum => this.generateDatumFormGroup(datum)))
      });
    });
  }
enableSection(index,disabled) {
  const capabilityFormGroup = (<FormArray>this.capabilityForm.get('capabilities')).at(index);
  disabled ? capabilityFormGroup.enable() : capabilityFormGroup.disable();
}
private generateDatumFormGroup(datum) {
  return this.fb.group({
    capability: this.fb.control({value: datum.Capability, disabled: true}),
    subCategory: this.fb.control({value: datum.SubCategory, disabled: true}),
    skill: this.fb.control({value: datum.Skill, disabled: true}),
    skillId: this.fb.control({value: datum.SkillID, disabled: true}),
  });
}
public count: number = 1;
public person: Person = {
  name: 'geetha',
  age: 20
};
public ngDoCheck(): void {
  console.log('docheck component change detetction' + (this.count++));
}
public reassign() {
  this.person = {
    name: this.person.name,
    age: this.person.age
  }
}
}
