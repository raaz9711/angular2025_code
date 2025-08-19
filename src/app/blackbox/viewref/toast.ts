import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `<div class="toast">{{ message }}</div>`,
  styles: [`.toast{padding:8px 12px;border:1px solid #e5e7eb;border-radius:8px;margin:4px 0}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  @Input() message = '';
}
