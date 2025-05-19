import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { InvestmentResponse } from '../../models/model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  investmentForm!:FormGroup;
  assetOption = ['Stock','Bond','Crypto','Real Estate'];
  currencyOption = ['USD','EUR','GBP','JPY'];
  constructor(public fb:FormBuilder, public dashboardService:DashboardService){}

  ngOnInit() {
    this.generateForm();
  }
  generateForm() {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      assetName: ['', Validators.required],
      assetSymbol: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
      currency: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      brokerName: [''],
      notes: ['']
    });
  }
  onSubmit() {
    if (this.investmentForm.valid) {
      console.log('Investment Data:', this.investmentForm.value);
      // send data to backend or service
      this.dashboardService.addInvestment(this.investmentForm.value).then((response: InvestmentResponse) => {
        console.log('Investment added successfully:', response.message);
        window.alert(response.message)

        // Optionally reset the form after submission
        this.investmentForm.reset();
      }).catch((error) => {
        console.error('Error adding investment:', error);
        window.alert(error.message);
      });

    } else {
      this.investmentForm.markAllAsTouched(); // show validation errors
    }
  }
}
