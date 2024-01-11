import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
    this.getData();
  }

  public  MahasiswaDataBaru:any = [];

  public nama:any="";
  public jenis_kelamin:any="";
  public no_handphone:any="";
  public email:any="";
  public asal_sekolah:any="";
  public studi:any="";
  public jenjang:any="";
  public kelas:any="";
  public info:any="";

  constructor(
    public modalCtrl: ModalController,
    public router:Router
  ) {
    this.getData();
  }

  ngOnInit() {
  }
  async getData() {
    try {
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api-refa/uas_refa/get_mahasiswa.php');
      this.MahasiswaDataBaru = res.data.result;
      console.log(this.MahasiswaDataBaru);
  
      }catch(err){
        console.log(err);
      }
    }

    baru(){
      this.router.navigate(['/tabs/tab4']);
    }

    pembayaran(){
      this.router.navigate(['pembayaran']);
    }
  }
