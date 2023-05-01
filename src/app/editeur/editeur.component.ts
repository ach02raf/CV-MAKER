import { Component } from '@angular/core';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.scss'],
})
export class EditeurComponent {
  isCollapsed = true;
  name: string;
  email: string;
  phone: string;
  address: string;
}
