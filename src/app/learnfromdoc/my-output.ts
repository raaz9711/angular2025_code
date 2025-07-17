import { Component, Directive, output } from "@angular/core";

@Directive({
    selector:'app-interval-dir',}
)
export class IntervalDirComponent{
    everySecond = output<string>();
    everyFiveSeconds = output<string>();
    constructor() {
        setInterval(() => {
            this.everySecond.emit(new Date().toISOString());
        }, 1000);

        setInterval(() => {
            this.everyFiveSeconds.emit(new Date().toISOString());
        }, 5000);
}
}

@Component({
    selector: 'app-my-output',
    template: `
        <h2>Output Example</h2>
        <app-interval-dir (everySecond)="onEverySecond($event)" (everyFiveSeconds)="onEveryFiveSeconds($event)"></app-interval-dir>
        <p>Every Second: {{ everySecond }}</p>
        <p>Every Five Seconds: {{ everyFiveSeconds }}</p>
    `,
    imports: [IntervalDirComponent],
})
export class MyOutputComponent {
    everySecond: string | null = null;
    everyFiveSeconds: string | null = null;

    onEverySecond(event: string) {
        this.everySecond = event;
        console.log('Every Second:', event);
    }

    onEveryFiveSeconds(event: string) {
        this.everyFiveSeconds = event;
        console.log('Every Second:', event);

    }
}