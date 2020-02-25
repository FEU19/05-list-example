import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-city-form',
	templateUrl: './add-city-form.component.html',
	styleUrls: ['./add-city-form.component.css']
})
export class AddCityFormComponent implements OnInit {
	inputValue: string = '';
	onKeyUp(event) {
		this.inputValue = event.target.value;
		console.log('Blir det rätt? ' + this.inputValue);
	}
	saveCity() {

	}

	constructor() { }

	ngOnInit(): void {
	}

}




//
