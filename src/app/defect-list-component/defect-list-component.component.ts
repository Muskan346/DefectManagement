import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-defect-list-component',
  templateUrl: './defect-list-component.component.html',
  styleUrls: ['./defect-list-component.component.css']
})
export class DefectListComponentComponent  {
  newDefects: any[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchNewDefects();
  }

  fetchNewDefects(): void {
    
    this.http.get<any[]>('http://localhost:8085/createDefect', { headers: { 'Authorization': 'Bearer your-access-token' } })
      .subscribe(
        response => {
          this.newDefects = response;
        },
        error => {
          console.error('Error fetching new defects:', error);
        }
      );
  }

  viewDetails(defectId: number): void {
    this.router.navigate(['/defects-details-component', defectId]);
  }
  
  // newDefects: any[] = []; // Replace 'any' with your actual Defect type

  // constructor(private router: Router) { }

  // ngOnInit() {
  //   // Fetch the defects from Postman or your API
  //   this.newDefects = [
  //     { id: 1, name: 'Defect 1' },
  //     { id: 2, name: 'Defect 2' },
  //     // Add more defects as needed
  //   ];
  // }

  // viewDetails(defectId: number) {
  //   this.router.navigate(['/defects-details-component', defectId]);
  // }



}





