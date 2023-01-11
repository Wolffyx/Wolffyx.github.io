import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	form: FormGroup = new FormGroup({
		name: new FormControl(null),
		email: new FormControl(null),
		message: new FormControl(null),
	});

	ngOnInit(): void {
	}

	send(): void {
		const {name, email, message} = this.form.value;
		alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
	}

}
