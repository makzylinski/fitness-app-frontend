import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  showLabel? = input<boolean>();
  label = input<string>();
  options = input<string[]>();
  id = input<string>();
  name = input<string>();

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  constructor(private elementRef: ElementRef) {}

  selectedOption: any;
  isDropdownOpen: boolean = false;

  toggleOpen = (): boolean => (this.isDropdownOpen = !this.isDropdownOpen);

  setSelectedOption = (option: any): void => {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  };
}
