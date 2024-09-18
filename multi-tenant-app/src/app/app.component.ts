import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {FormComponent} from "my-form-lib";
import {FormConfigService} from "./form-config.service";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, HttpClientModule, NgIf],
  providers: [FormConfigService, Location],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'multi-tenant-app';
  sections = [];
  tenant = '';

  private route = inject(ActivatedRoute);  // Inject ActivatedRoute
  private router = inject(Router);  // Inject Router for navigation

  constructor(
    private formConfigService: FormConfigService,
    private location: Location
  ) {}

  ngOnInit() {
    let apiUrl = 'https://run.mocky.io/v3/432eeb75-ac37-4c51-8223-af45c625dc25'; // For 2 sections
    this.tenant = this.location.path().split('/')[1];
    if (this.tenant === 'tenant2') {
      apiUrl = 'https://run.mocky.io/v3/b1fddfd9-72b4-409f-8f6c-1a492b3f31fa';
    }

    this.formConfigService.getFormConfig(apiUrl).subscribe((config) => {
      this.sections = config.sections;
    });
  }
}
