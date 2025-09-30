import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken(){
    //Recuperar token do Localstorage
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibm92b0BleGFtcGxlLmNvbSIsImlhdCI6MTc1OTI3NTc4MiwiZXhwIjoxNzU5MzYyMTgyfQ.O93oywcLrKIuZztyko3iHGipOtgi9T_WrGsf1Qt81_U';
  }
}
