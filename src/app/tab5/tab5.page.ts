import { Component, OnInit } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public npm:any = "";
  public password:any = "";
  public nama_mahasiswa:any = "";
  public jenis_kelamin:any = "";
  public jurusan:any = "";
  public foto_mahasiswa:any = null;
  
  public login:any=[];
  constructor(
    private router:Router,
    public alert:AlertController,
  ) {   
    this.getData();
  }

  ngOnInit() {
  }

  async getData() {
    try {
      const res = await axios.post('http://localhost/uas/login.php');
      this.login = res.data.result;
      console.log(this.login);
    
      }catch(err){
        console.log(err);
      }
    }

    async logout() {
      this.confirmLogout();
    }
    
    async confirmLogout() {
      const alert = await this.alert.create({
        header: 'Konfirmasi',
        message: 'Apakah Anda ingin keluar dari akun?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancelled');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Logging out');
              this.router.navigate(['/login']);
            }
          }
        ]
      });
      await alert.present();
    }

}

