import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Patient} from "../../model/patient";
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any;
  genders: any;
  services: any;
  patient = new Patient();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getPatientsData();
  }

  getPatientsData() {
    const data = this.dataService.getData();
    const gender = this.dataService.getGender();
    const service = this.dataService.getService();

    forkJoin([data, gender, service]).subscribe({
        next: ([data, dataGender, dataService]) => {
          this.patients = data;
          this.genders = dataGender;
          this.services = dataService;
        }
      }
    );
    this.dataService.getData().subscribe(res => {
      this.patients = res;
    });
  }

  insertData($data:any) {
    this.dataService.insertData($data).subscribe(res => {
      this.getPatientsData();
      this.patient = new Patient();
    })
  }

}
