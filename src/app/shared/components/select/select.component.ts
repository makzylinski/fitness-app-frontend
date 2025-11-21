import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, isObservable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnChanges, OnInit, OnDestroy {
  @Input() showLabel?: boolean = false;
  @Input() label: string = '';
  @Input() options?: Observable<any[]> | any[];
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() width: number = 307;
  @Input() disabled: boolean = false;
  @Input() exercise?: any;
  @Input() selected?: any;

  @Input() displayWith?: (option: any) => string;
  @Input() searchWith?: (option: any, term: string) => boolean;
  @Input() iconFor?: (option: any) => string | null | undefined;
  @Input() placeholder: string = 'Select option';
  @Input() noSelectionLabel: string = 'No selection';

  onSelect = output<any>();

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  selectedOption?: any;
  isDropdownOpen: boolean = false;
  filteredOptions = new BehaviorSubject<any[]>([]);
  private allOptions: any[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initOptionsStream();
    this.initSelectedFromInputs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && !changes['options'].firstChange) {
      this.initOptionsStream();
    }
    if ((changes['selected'] || changes['exercise']) && !changes['selected']?.firstChange && !changes['exercise']?.firstChange) {
      this.initSelectedFromInputs();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleOpen = (): boolean => {
    if (this.disabled) return false;
    return (this.isDropdownOpen = !this.isDropdownOpen);
  };

  setSelectedOption = (option: any): void => {
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
      const filtered = this.allOptions.filter((el) => {
        if (this.searchWith) {
          return !!this.searchWith(el, searchValue);
        }
        const label = this.getLabel(el).toLowerCase();
        return label.includes(searchValue);
      });
      this.filteredOptions.next(filtered);
    }

    this.cdr.markForCheck();
  };

  getLabel = (option: any): string => {
    if (this.displayWith) return this.displayWith(option) ?? '';
    if (option == null) return '';
    if (typeof option === 'string' || typeof option === 'number') return String(option);

    const maybe = (option as any)?.typeName ?? (option as any)?.name ?? (option as any)?.label;
    return maybe ? String(maybe) : '';
  };

  getSelectedText = (): string => {
    const label = this.selectedOption ? this.getLabel(this.selectedOption) : '';
    if (this.disabled) return label || this.noSelectionLabel;
    return label || this.placeholder;
  };

  private initOptionsStream(): void {
    if (!this.options) {
      this.allOptions = [];
      this.filteredOptions.next([]);
      this.cdr.markForCheck();
      return;
    }

    if (isObservable(this.options)) {
      (this.options as Observable<any[]>)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any[]) => {
          this.allOptions = data || [];
          this.filteredOptions.next(this.allOptions);
          this.cdr.markForCheck();
        });
    } else if (Array.isArray(this.options)) {
      this.allOptions = this.options || [];
      this.filteredOptions.next(this.allOptions);
      this.cdr.markForCheck();
    }
  }

  private initSelectedFromInputs(): void {
    this.selectedOption = this.selected ?? this.exercise;
    this.cdr.markForCheck();
  }
}
