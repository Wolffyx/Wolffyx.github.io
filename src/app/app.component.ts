import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'wolffyx';
	menus: { name: string, link: string }[] = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'Skills',
			link: '/skills'
		},
		{
			name: 'Projects',
			link: '/projects'
		},
		{
			name: 'Contact',
			link: '/contact'
		},
	];
}
