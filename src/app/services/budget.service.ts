import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgets: Budget[] = [
    {
      title: "Seo",
      description: "Programació d'una web responsive completa",
      price: 300,
      select: false
    },
    {
      title: "Ads",
      description: "Programació d'una web responsive completa",
      price: 400,
      select: false 
    },
    {
      title: "Web",
      description: "Programació d'una web responsive completa",
      price: 500,
      select: false
    }
  ];

  getBudgets(): Budget[] {
    return this.budgets;
  }

  constructor() { }
}
