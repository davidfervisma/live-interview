import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    title: string = 'To Do List';

    constructor() { }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }
}