import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//Decorator function which converts this regular class to  a component
@Component({
    //css selector which  determines  how an element should be referenced: <component>
    //see this cheat sheet: https://htmlcheatsheet.com/css/
    selector: 'courses',
    //The HTML markup we want to render
    //Using  a directive here to  iterate through the array of courses 
    //angular  directives are used  to manipulate the dom elements by adding, removing or modifying them
    //use the "*" as prefix whenever directives are being used
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    <ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    //
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}