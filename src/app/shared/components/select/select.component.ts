import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() showLabel?: boolean = false;
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() id: string = '';
  @Input() name: string = '';

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  selectedOption: any;
  isDropdownOpen: boolean = false;
  serachValue: string = '';
  filteredOptions: any[] = [];

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  toggleOpen = (): boolean => (this.isDropdownOpen = !this.isDropdownOpen);

  setSelectedOption = (option: any): void => {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  };

  onSearch = (search: any): void => {
    this.filteredOptions = (this.options ?? []).filter((el) =>
      el.toLowerCase().includes(search.target.value.toLowerCase())
    );
    this.cdr.markForCheck();
  };
}
