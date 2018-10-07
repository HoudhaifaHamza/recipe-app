import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from "@angular/core";
import {Response} from "@angular/http"

import { AuthService } from './../auth/auth.service';

@Component({

selector: 'app-header',
templateUrl : './header.component.html',
styleUrls : ['./header.component.css']


})
export class HeaderComponent {

constructor(private dataStorageService : DataStorageService, private authService : AuthService){}

    onSaveData(){

        this.dataStorageService.storageRecipe()
        .subscribe(

            (res : Response) => { console.log(res) ;
            }



        );


    }

    onLogOut(){

this.authService.logOut() ;

    }



    onFetchData(){


 this.dataStorageService.getRecipe() ;
console.log(this.dataStorageService.getRecipe());





    }
 
// @Output() featureSelected = new EventEmitter<string>();

//     OnSelect (feature : string){

//         this.featureSelected.emit(feature);


//     }



}