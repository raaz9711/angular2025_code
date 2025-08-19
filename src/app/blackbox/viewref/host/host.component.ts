import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../toast';

@Component({
  selector: 'app-host',
  imports: [CommonModule],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostComponent {
 @ViewChild('portal', { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;

    show(msg: string) {
    const ref = this.vcr.createComponent(ToastComponent);
    ref.setInput('message', msg);
   // setTimeout(() => ref.destroy(), 2500); // cleanup
  }
    clear() { this.vcr.clear(); }

}
