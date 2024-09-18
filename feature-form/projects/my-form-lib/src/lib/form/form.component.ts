import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit{
  @Input() sections:any[] = [];

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.createForm(this.sections);
  }

  createForm(sections: any[]) {
    const formControls: any = {};
    sections.forEach((section) => {
      section.fields.forEach((field: any) => {
        const validators = [];
        if (field.validation.required) validators.push(Validators.required);
        if (field.validation.email) validators.push(Validators.email);
        formControls[field.name] = ['', validators];
      });
    });
    this.form = this.fb.group(formControls);
  }

  getSectionClass(layout: string): string {
    switch (layout) {
      case '2x2':
        return 'grid-2x2';
      case '2x3':
        return 'grid-2x3';
      case '3x3':
        return 'grid-3x3';
      default:
        return '';
    }
  }

  getFieldClass(layout: string): string {
    return layout === '2x2' || layout === '2x3' || layout === '3x3' ? 'field' : '';
  }
}
