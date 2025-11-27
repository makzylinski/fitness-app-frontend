import { Route, Router } from "@angular/router";
import { NavigationService } from "./navigation.service";
import { TestBed } from "@angular/core/testing";

describe('NavigationService', () => {
    let service: NavigationService;
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate', 'navigateByUrl']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationService,
                {
                    provide: Router,
                    useValue: routerSpy
                }
            ],
        });
        service = TestBed.inject(NavigationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should navigate to login', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToLogin();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/login']);
        await expectAsync(result).toBeResolvedTo(true);
    });

    it('should navigate to signup', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToSignUp();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/signup']);
        await expectAsync(result).toBeResolvedTo(true);
    });

    it('should navigate to dashboard', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToDashboard();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/dashboard']);
        await expectAsync(result).toBeResolvedTo(true);
    });

    it('should navigate to workouts', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToWorkouts();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/workouts']);
        await expectAsync(result).toBeResolvedTo(true);
    });

    it('should navigate to workout-history', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToWorkoutHistory();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/workout-history']);
        await expectAsync(result).toBeResolvedTo(true);
    });

    it('should navigate to meal-log', async () => {
        const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        routerSpy.navigate.and.returnValue(Promise.resolve(true) as any);

        const service = new NavigationService(routerSpy as unknown as Router);

        const result = service.navigateToMealLog();

        expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/meal-log']);
        await expectAsync(result).toBeResolvedTo(true);
    });
});