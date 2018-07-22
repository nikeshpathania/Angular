import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})

export class DropdownDirective {
   @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleopen() { 
        this.isOpen = !this.isOpen;
    }


// @Directive({
//     selector: '[appDropDown]',
//     exportAs: 'appDropDown'
// })
// export class DropdownDirective {

//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleopen() {
//         console.log(1);
//         this.isOpen = !this.isOpen;
//     }
}

