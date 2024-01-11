import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public npm:any = "";
  public password:any = "";
  public nama_mahasiswa:any = "";
  public jenis_kelamin:any = "";
  public jurusan:any = "";
  public foto_mahasiswa:any = null;

  constructor(
    public toastCtrl: ToastController,
    private router:Router,
  ) {}

  ngOnInit() {
  }

  async imageUpload(event:any){
    console.log(event);
    const file = event.target.files[0];
    this.foto_mahasiswa = file;
  }

  async addData(){
    const formData = new FormData();
    formData.append('npm', this.npm);
    formData.append('password', this.password);
    formData.append('nama_mahasiswa', this.nama_mahasiswa);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('jurusan', this.jurusan);
    formData.append('foto_mahasiswa', this.foto_mahasiswa);
    console.log(formData);

    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api-refa/uas_refa/sign.php',formData);
      console.log(res.data);

      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message:'Data Berhasil ditambahkan',
          duration: 2000,
      });
        toast.present();
        this.router.navigate(['/login']);
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
