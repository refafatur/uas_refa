import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public nama:any="";
  public jenis_kelamin:any="";
  public no_handphone:any="";
  public email:any="";
  public asal_sekolah:any="";
  public studi:any="";
  public jenjang:any="";
  public kelas:any="";
  public info:any="";
  // public status:any="";

  constructor(
    public toastCtrl: ToastController
  ) {}

  
  async addData(){
    const formData = new FormData();
    formData.append('nama', this.nama);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('no_handphone', this.no_handphone);
    formData.append('email', this.no_handphone);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('studi', this.studi);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info', this.info);
    // formData.append('status', this.status);
    console.log(formData);
    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api-refa/uas_refa/add_data.php',formData);
      console.log(res.data);

      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message:'Data Berhasil ditambahkan',
          duration: 2000
      });
        toast.present();
      }
      else{
        const toast = await this.toastCtrl.create({
          message: 'Data Gagal ditambahkan',
          duration: 2000
      });
          toast.present();
      }
      
      }
      catch(err){
        console.log(err);
      }
    }
}