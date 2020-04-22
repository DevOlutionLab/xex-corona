import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestService } from '../_services/test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  error: any;
  response: any;

  constructor(
    private fb: FormBuilder,
    private testService: TestService
  ) { }

  testForm = this.fb.group({
    malDeTete: [null, Validators.required],
    toux: [null, Validators.required],
    gorgeIrritee: [null, Validators.required],
    fievre: [null, Validators.required],
    sentimentGeneralDeMalaise: [null, Validators.required],
    geneRespiratoire: [null, Validators.required],
    fatigueInnabituelle: [null, Validators.required],
    alimentationDifficile: [null, Validators.required],
    courbature: [null, Validators.required],
    voyage: [null, Validators.required],
    enContact: [null, Validators.required]
  })

  ngOnInit(): void {
  }

  onTestSubmit() {

    if (this.testForm.invalid) {
      return;
    }

    this.testService.sendTestData(this.testForm.value)
      .subscribe(
        res => {
        this.response = res.message;
        console.log(this.response);
        },
        err => {
          this.error = err;
          console.log(this.error);
        }
      );
  }

}
