import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'listExample';
	data = [
		'Göteborg', 'Helsingborg', 'Rom', 'Sydney'
	];
	addNewCity(name: string): void {
		console.log('addNewCity', name);
		this.data.push(name);
	}
	handleDelete(cityName: string): void {
		this.data = this.data.filter( name => name !== cityName );
		console.log('handleDelete: new list = ', this.data);
	}
}





//
