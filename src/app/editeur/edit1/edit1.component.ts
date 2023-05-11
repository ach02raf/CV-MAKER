import { Component, Input, OnInit } from '@angular/core';
import { CV } from 'src/app/models/CV';
import { Liens } from 'src/app/models/Liens';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.sass'],
})
export class Edit1Component implements OnInit {
  @Input() monCV: CV;
  isCollapsed = true;
  isCollapsedcordonnee = true;
  isCollapsedliens = true;
  isCollapsedhobby = true;
  varnull: string = '';
  varnull1: string = '';
  varnull2: string = '';
  varnull3: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    if (!this.monCV.urlImage) {
      this.convertImageToBuffer(
        'http://localhost:4200/assets/image_placeholder.jpg'
      );
    }
  }

  convertImageToBuffer(imageUrl: string): void {
    this.http
      .get(imageUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const base64Image = btoa(
          new Uint8Array(data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        this.monCV.urlImage = `data:image/jpeg;base64,${base64Image}`;
      });
  }
  addHobby(input: any) {
    const foundObj = this.monCV.loisirs.find(
      (obj) => obj === input.target.value
    );
    if (foundObj) {
      input.target.value = '';
    } else {
      event.preventDefault(); // prevent the default form submission behavior
      if (this.monCV.loisirs.indexOf(input.target.value) == -1) {
        this.monCV.loisirs.push(input.target.value);
      }
      input.target.value = '';
    }
  }

  removeHobby(hash: string) {
    const index = this.monCV.loisirs.indexOf(hash);
    if (index !== -1) {
      this.monCV.loisirs.splice(index, 1);
    }
  }
  async addLiens(event: any, name: any) {
    let lien = new Liens();
    lien.nom = name;
    lien.url = await event;
    const indexToUpdate = this.monCV.liens.findIndex((obj) => obj.nom === name);
    if (indexToUpdate !== -1) {
      this.monCV.liens[indexToUpdate] = lien;
    } else {
      this.monCV.liens.push(lien);
    }
  }
  onFileSelected(event): void {
    const file = event.target.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader object
    reader.readAsDataURL(file); // read the file data as a base64-encoded string
    reader.onload = () => {
      // set the onload event handler
      this.monCV.urlImage = reader.result as string;
    };
  }
}
