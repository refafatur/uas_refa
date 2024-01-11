import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController,AlertController } from '@ionic/angular';


import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public npm: any = "";
  public password: any = "";

  constructor(
    private router: Router,
    public alert:AlertController,

  ) { 

  }

  ngOnInit() {}

   async Getdata() {
    this.confirmLogin();
  }

  
  async confirmLogin() {
    const alert = await this.alert.create({
      header: 'Konfirmasi',
      message: 'Login Berhasil',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Login');
            this.router.navigate(['/tabs']);
          }
        }
      ]
    });
    await alert.present();
  }
  

  sign() {
    this.router.navigate(['/signup']);
  }

}