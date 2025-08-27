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
import { WorkoutType } from '../../../models/exercise.model';
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

  onSelect = output<WorkoutType>();

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  TypeOfWorkout = TypeOfWorkout;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  selectedOption!: WorkoutType;
  isDropdownOpen: boolean = false;
  serachValue: string = '';
  filteredOptions = new BehaviorSubject<WorkoutType[]>([]);
  private allOptions: WorkoutType[] = [];

  ngOnInit(): void {
    this.options.subscribe((data: WorkoutType[]) => {
      this.allOptions = data || [];
      this.filteredOptions.next(this.allOptions);
    });
  }

  toggleOpen = (): boolean => {
    if (this.disabled) return false;
    return (this.isDropdownOpen = !this.isDropdownOpen);
  };

  setSelectedOption = (option: WorkoutType): void => {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    console.log(this.selectedOption);
    this.onSelect.emit(this.selectedOption);
    this.cdr.markForCheck();
  };

  onSearch = (search: Event): void => {
    const searchValue = (search.target as HTMLInputElement).value.toLowerCase();
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
