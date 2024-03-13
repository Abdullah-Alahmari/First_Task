import { Component } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbCollapse],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isCollapsed = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
  }

  add_class(){
    this.el.nativeElement.querySelector('#navbarNav').classList.add('navbar-mobile');
  }

  dropdown_active(){
    if(this.el.nativeElement.querySelector('#navbarNav > ul > li.dropdown > ul').classList.contains("dropdown-active"))
      this.el.nativeElement.querySelector('#navbarNav > ul > li.dropdown > ul').classList.remove('dropdown-active');
    else 
      this.el.nativeElement.querySelector('#navbarNav > ul > li.dropdown > ul').classList.add('dropdown-active');
  }

  remove_class(){
    this.el.nativeElement.querySelector('#navbarNav').classList.remove('navbar-mobile');
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.remove_class();
    }else{
      this.add_class();
    }
  }

  closeNavbar() {
    this.isCollapsed = true;
    this.remove_class();
  }

}
