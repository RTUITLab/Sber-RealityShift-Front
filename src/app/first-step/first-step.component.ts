import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  currentStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
