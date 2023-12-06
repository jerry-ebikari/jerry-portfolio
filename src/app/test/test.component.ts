import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  liveBaseUrl = "https://uzbmhwri7wzrdri7iso263vdse0lclnm.lambda-url.us-east-2.on.aws/api/v1/";
  devBaseUrl = "https://euscd328hf.execute-api.us-east-2.amazonaws.com/api/v1/";
  personalBaseUrl = "https://b4iz6xw4a6u5e2ybna6r3tnd440nsuaj.lambda-url.us-east-2.on.aws/api/v1/";
  baseUrl = this.liveBaseUrl;
  output = "Output";
  loading: boolean = false;
  token = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loginToSmtp() {
    this.loading = true;
    this.http.post(this.baseUrl+ "auth/signin", {
      "email": "jerry@encentralsolutions.com",
      "password": "Password2023!"
    }).subscribe({
      next: (res: any) => {
        this.output = "SUCCESS";
        this.token = res['token'];
        this.loading = false
      },
      error: (error: any) => {
        this.output = "LOGIN FAILED";
        this.loading = false
      }
    })
  }

  makeDummyRequest() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.loading = true;
    this.http.get(this.baseUrl+ "applications", { headers }).subscribe({
      next: (res: any) => {
        this.output = "SUCCESSFULLY RETRIEVED APPLICATION LIST";
        this.loading = false
      },
      error: (error: any) => {
        this.output = "FAILED TO GET APPLICATION LIST";
        this.loading = false
      }
    })
  }

}
