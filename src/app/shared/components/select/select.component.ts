import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() showLabel?: boolean = false;
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() id: string = '';
  @Input() name: string = '';
}
