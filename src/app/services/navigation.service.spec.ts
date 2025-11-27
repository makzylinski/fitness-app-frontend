import { Router } from "@angular/router";
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
});