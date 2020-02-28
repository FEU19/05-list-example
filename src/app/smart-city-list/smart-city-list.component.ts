import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-smart-city-list',
	templateUrl: './smart-city-list.component.html',
	styleUrls: ['./smart-city-list.component.css']
})
export class SmartCityListComponent implements OnInit {
	// fetch data from service in future version

	@Input() data: City[] = [];
	@Output() deleteCity = new EventEmitter<string>();

	constructor() { }

	handleDelete(cityName: string) {
		this.deleteCity.emit(cityName);
	}
	ngOnInit(): void {
	}

}
