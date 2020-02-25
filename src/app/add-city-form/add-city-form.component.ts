import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-add-city-form',
	templateUrl: './add-city-form.component.html',
	styleUrls: ['./add-city-form.component.css']
})
export class AddCityFormComponent implements OnInit {
	inputValue: string = '';
	onKeyUp(event) {
		this.inputValue = event.target.value;
		// console.log('Blir det rätt? ' + this.inputValue);
	}
	saveCity() {
		console.log('About to send an event with data: ' + this.inputValue);
		this.onSaveCity.emit(this.inputValue);
	}
	@Output() onSaveCity = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

}




//
