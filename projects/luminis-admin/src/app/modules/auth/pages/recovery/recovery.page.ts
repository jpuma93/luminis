import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.page.html',
    styleUrls: ['./recovery.page.css']
})
export class RecoveryPage implements OnInit {
    form!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {}

    //TODO:Agregar mas validaciones(expresion regular para el email y password)
    buildForm() {
        this.form = this.fb.group({
            correo: ['', [Validators.required, Validators.email]]
        });
    }
    recovery(): void {
        if (this.form.invalid) {
            //TODO:Marcar los controles que estan invalidos
            return;
        }
        console.log(this.form.value);
    }
}
