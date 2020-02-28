import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
	providedIn: 'root'
})
export class CityService {
	data: City[] = [
		{ name: 'Göteborg' },
		{ name: 'Helsingborg' },
		{ name: 'Rom' },
		{ name: 'Sydney'}
	];
	getCities(): City[] {
		return this.data;
	}
	addNewCity(cityName: string) {
		let cityObject = { name: cityName };
		this.data.push(cityObject);
	}
	deleteCity(cityName: string) {
		this.data = this.data.filter( city => city.name !== cityName );
	}
	constructor() { }
}




//
