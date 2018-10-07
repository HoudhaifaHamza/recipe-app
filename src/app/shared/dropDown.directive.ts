import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({

selector : '[app-dropdown]',


})
export class DropDownDirective{


@HostBinding('class.open') isOpen = false ;


@HostListener ('click') test (){


this.isOpen = !this.isOpen; 



} 



}