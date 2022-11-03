import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData,SelectInterface } from '../app.component';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  profileForm!: FormGroup;
  selectValue : SelectInterface[] = [
    {
      Id: "JagodaId",
      Name: "Jagoda"
    },
    {
      Id: "KomarId",
      Name: "Komar"
    },
    {
      Id: "SlonId",
      Name: "Slon"
    },
  ]
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private form: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.profileForm = this.form.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      people: [''],
      coment: [''],
      date: [''],
      checkbox: [''],
    });
  }
  registerInfo(){
    this.dialogRef.close(this.profileForm.value)
    }

}

