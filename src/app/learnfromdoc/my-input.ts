import { Component } from "@angular/core";

@Component({
  selector: 'app-bank-account',
  inputs: ['bankName', 'id: account-id'],
  template: ` Bank Name: {{ bankName }} Account Id: {{ id }} `,
})
export class BankAccountComponent {
  bankName: string | null = null;
  id: string | null = null;
  // this property is not bound, and won't be automatically updated by Angular
  normalizedBankName: string | null = null;
}
@Component({
  selector: 'app-my-input',
  template: ` <app-bank-account [bankName]="bankName" [account-id]="id" />`,
  imports: [BankAccountComponent],
})
export class MyInputComponent {
bankName: string | null = "rbc";
id: string | null = "474"

}