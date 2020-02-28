import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'listExample';
	data: City[] = [];
	addNewCity(name: string): void {
		console.log('addNewCity', name);
		this.cityService.addNewCity(name);
		this.data = this.cityService.getCities();
	}
	handleDelete(cityName: string): void {
		this.cityService.deleteCity(cityName);
		this.data = this.cityService.getCities();
		console.log('handleDelete: new list = ', this.data);
	}
	constructor(public cityService: CityService) {}
	ngOnInit() {
		this.data = this.cityService.getCities();
	}
}





//
