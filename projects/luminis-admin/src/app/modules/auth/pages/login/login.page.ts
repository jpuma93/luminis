import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
    form!: FormGroup;
    hide: boolean = true;

    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {}

    //TODO:Agregar mas validaciones(expresion regular para el email y password)
    buildForm() {
        this.form = this.fb.group({
            correo: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }
    login(): void {
        if (this.form.invalid) {
            //TODO:Marcar los controles que estan invalidos
            return;
        }
        console.log(this.form.value);
    }
}
