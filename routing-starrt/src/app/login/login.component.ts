import { Component, OnInit } from '@angular/core';
import { UserDetails } from './UserDetails.component';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    apiURL = 'http://localhost:8080';
    model = new UserDetails();
    private modelArray: any[] ;
    constructor(private httpClient: HttpClient){}

    ngOnInit(){

    }

    signUpDetails(){

    }

   submit(){

    // this.httpClient.get('/api/name').subscribe(message => {
    //   console.log('message value ' + message);
    //   }, error => {
    //     console.log(error);
    //   },
    //   );

    this.httpClient.post('/api/saveData', this.model).subscribe(message => {
      console.log('message value ' + message);
      }, error => {
        console.log(error);
      },
  );

    // this.httpClient.get('/api/getData').subscribe(message => {
    //     console.log('message value ' + message);
    //     }, error => {
    //       console.log(error);
    //     },
    // );
    // this.modelArray[0] = this.model.username;
    // this.modelArray[1] = this.model.password;
    // this.modelArray[2] = this.model.cnfmPassword;
    // this.modelArray[3] = this.model.MobileNumber;

    

   }
}
