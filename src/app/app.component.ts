import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public http : HttpClient) {
    http.get('http://localhost:8000/api/employees').subscribe(console.log);
  }
}
