import { Component } from '@angular/core';
import { City } from './city';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'listExample';
	data: City[] = [
		{ name: 'Göteborg' },
		{ name: 'Helsingborg' },
		{ name: 'Rom' },
		{ name: 'Sydney'}
	];
	addNewCity(name: string): void {
		console.log('addNewCity', name);
		let cityObject = { name: name };
		this.data.push(cityObject);
	}
	handleDelete(cityName: string): void {
		this.data = this.data.filter( city => city.name !== cityName );
		console.log('handleDelete: new list = ', this.data);
	}
}





//
