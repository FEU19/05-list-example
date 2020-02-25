import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-smart-city-list',
	templateUrl: './smart-city-list.component.html',
	styleUrls: ['./smart-city-list.component.css']
})
export class SmartCityListComponent implements OnInit {
	// fetch data from service in future version
	data = [
		'Göteborg', 'Helsingborg', 'Rom', 'Sydney'
	];

	constructor() { }

	ngOnInit(): void {
	}

}
