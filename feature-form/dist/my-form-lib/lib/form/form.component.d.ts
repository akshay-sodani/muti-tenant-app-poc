import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class FormComponent implements OnInit {
    private fb;
    sections: any[];
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    createForm(sections: any[]): void;
    getSectionClass(layout: string): string;
    getFieldClass(layout: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "lib-form", never, { "sections": { "alias": "sections"; "required": false; }; }, {}, never, never, true, never>;
}
