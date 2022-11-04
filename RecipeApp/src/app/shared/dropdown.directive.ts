import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
    // To close the dropdown from any outside click we need to add constructior anf modify the hostlistnerts as follows:
    constructor(private elRef: ElementRef) {}

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}
