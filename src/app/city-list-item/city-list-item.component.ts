import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-city-list-item',
	templateUrl: './city-list-item.component.html',
	styleUrls: ['./city-list-item.component.css']
})
export class CityListItemComponent implements OnInit {
	@Input() cityName: string = '???';
	@Output() deleteCity = new EventEmitter<string>();

	onDeleteCity() {
		this.deleteCity.emit(this.cityName);
	}

	constructor() { }

	ngOnInit(): void {
	}

}





//
