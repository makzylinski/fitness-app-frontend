import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../services/workouts.service';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private readonly workoutsService: WorkoutsService) {}
  ngOnInit(): void {
    this.workoutsService.getWorkouts().subscribe((e) => console.log(e));
  }
}
