import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testForm = this.fb.group({  // Crée une instance de FormGroup
      // Crée une instance de FormControl
      malDeTete: [],
      toux: [],
      gorgeIrritee: [],
      fievre: [],
      sentimentGeneralDeMalaise: [],
      geneRespiratoire: [],
      fatigueInnabituelle: [],
      alimentationDifficile: [],
      courbature: [],
      voyage: [],
      enContact: [],
    });
  }

  count: number=0;
  value;

  testing() {

    Object.keys(this.testForm.value)
      .forEach((key: string) => {
        this.value = this.testForm.get(key);
          if (this.value.value == true) {
            this.count++;
            // alert(this.count)
          }
    })

    if (this.count <= 11 && this.count >= 6) {
      alert('Suspect!');
      console.log(this.count, this.value)
    }
    else {
      alert('Ca va!');
      console.log(this.count)
    }
  }

}
