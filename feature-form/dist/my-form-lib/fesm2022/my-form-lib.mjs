import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class MyFormLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MyFormLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: MyFormLibComponent, isStandalone: true, selector: "lib-my-form-lib", ngImport: i0, template: `
    <p>
      my-form-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MyFormLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-form-lib', standalone: true, imports: [], template: `
    <p>
      my-form-lib works!
    </p>
  ` }]
        }] });

class FormComponent {
    fb;
    sections = [];
    form;
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.createForm(this.sections);
    }
    createForm(sections) {
        const formControls = {};
        sections.forEach((section) => {
            section.fields.forEach((field) => {
                const validators = [];
                if (field.validation.required)
                    validators.push(Validators.required);
                if (field.validation.email)
                    validators.push(Validators.email);
                formControls[field.name] = ['', validators];
            });
        });
        this.form = this.fb.group(formControls);
    }
    getSectionClass(layout) {
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
    getFieldClass(layout) {
        return layout === '2x2' || layout === '2x3' || layout === '3x3' ? 'field' : '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: FormComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: FormComponent, isStandalone: true, selector: "lib-form", inputs: { sections: "sections" }, ngImport: i0, template: "<form [formGroup]=\"form\" class=\"p-6 space-y-6\">\n  <div *ngFor=\"let section of sections\" class=\"space-y-4 border-2 rounded-md p-2\">\n    <div class=\"rounded-md pl-2 py-1.5 bg-gray-200\">\n      <h2 class=\"text-lg font-semibold\">{{ section.name }}</h2>\n    </div>\n    <div [ngClass]=\"getSectionClass(section.layout)\" class=\"grid gap-4\">\n      <div *ngFor=\"let field of section.fields\" [ngClass]=\"getFieldClass(section.layout)\">\n        <label class=\"block text-sm font-medium text-gray-700\">{{ field.label }}</label>\n        <input\n          [type]=\"field.type\"\n          [formControlName]=\"field.name\"\n          [attr.placeholder]=\"field.label\"\n          class=\"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500\"\n        />\n        <div *ngIf=\"form.get(field.name)?.invalid && form.get(field.name)?.touched\" class=\"text-sm text-red-500\">\n          <small *ngIf=\"form.get(field.name)?.errors?.['required']\">This field is required.</small>\n          <small *ngIf=\"form.get(field.name)?.errors?.['email']\">Invalid email address.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50\">Submit</button>\n</form>\n", styles: [".grid-2x2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.grid-2x3,.grid-3x3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.field{display:flex;flex-direction:column}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-form', standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                    ], encapsulation: ViewEncapsulation.None, template: "<form [formGroup]=\"form\" class=\"p-6 space-y-6\">\n  <div *ngFor=\"let section of sections\" class=\"space-y-4 border-2 rounded-md p-2\">\n    <div class=\"rounded-md pl-2 py-1.5 bg-gray-200\">\n      <h2 class=\"text-lg font-semibold\">{{ section.name }}</h2>\n    </div>\n    <div [ngClass]=\"getSectionClass(section.layout)\" class=\"grid gap-4\">\n      <div *ngFor=\"let field of section.fields\" [ngClass]=\"getFieldClass(section.layout)\">\n        <label class=\"block text-sm font-medium text-gray-700\">{{ field.label }}</label>\n        <input\n          [type]=\"field.type\"\n          [formControlName]=\"field.name\"\n          [attr.placeholder]=\"field.label\"\n          class=\"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500\"\n        />\n        <div *ngIf=\"form.get(field.name)?.invalid && form.get(field.name)?.touched\" class=\"text-sm text-red-500\">\n          <small *ngIf=\"form.get(field.name)?.errors?.['required']\">This field is required.</small>\n          <small *ngIf=\"form.get(field.name)?.errors?.['email']\">Invalid email address.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid\" class=\"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50\">Submit</button>\n</form>\n", styles: [".grid-2x2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.grid-2x3,.grid-3x3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.field{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { sections: [{
                type: Input
            }] } });

/*
 * Public API Surface of my-form-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormComponent, MyFormLibComponent };
//# sourceMappingURL=my-form-lib.mjs.map
