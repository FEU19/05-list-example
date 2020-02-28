import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-list-item',
	templateUrl: './city-list-item.component.html',
	styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {
	@Input() city: City = { name: '???' };
	@Output() deleteCity = new EventEmitter<string>();

	onDeleteCity() {
		this.deleteCity.emit(this.city.name);
	}

	constructor() { }

	ngOnInit(): void {
	}

}





//
