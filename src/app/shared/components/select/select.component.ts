import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TypeOfWorkout } from '../../model/type-of-workout';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() showLabel?: boolean = false;
  @Input() label: string = '';
  @Input() options: Observable<any> = of(null);
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() width: number = 307;
  @Input() disabled: boolean = false;
  @Input() exercise: any; // TODO add type

  onSelect = output<string | number>();

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  TypeOfWorkout = TypeOfWorkout;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  selectedOption: any;
  isDropdownOpen: boolean = false;
  serachValue: string = '';
  filteredOptions = new BehaviorSubject<any[]>([]);
  private allOptions: any[] = [];

  ngOnInit(): void {
    this.options.subscribe((data) => {
      this.allOptions = data || [];
      console.log(data);
      this.filteredOptions.next(this.allOptions);
    });
  }

  toggleOpen = (): boolean => {
    if (this.disabled) return false;
    return (this.isDropdownOpen = !this.isDropdownOpen);
  };

  setSelectedOption = (option: any): void => {
    this.selectedOption = option;
    console.log(option);
    this.isDropdownOpen = false;
    this.onSelect.emit(this.selectedOption);
    this.cdr.markForCheck();
  };

  onSearch = (search: any): void => {
    const searchValue = search.target.value.toLowerCase();
    if (!searchValue) {
      this.filteredOptions.next(this.allOptions);
    } else {
      const filtered = this.allOptions.filter((el) =>
        el?.typeName?.toLowerCase().includes(searchValue)
      );
      this.filteredOptions.next(filtered);
    }

    this.cdr.markForCheck();
  };
}
