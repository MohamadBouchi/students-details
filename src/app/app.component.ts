import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';


@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [NgClass, RouterOutlet, SideBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'students-details';
	sidebarExpanded: boolean = true;
}
