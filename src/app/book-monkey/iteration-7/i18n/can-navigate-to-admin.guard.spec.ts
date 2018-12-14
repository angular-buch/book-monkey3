import { TestBed, async } from '@angular/core/testing';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

describe('CanNavigateToAdminGuard', () => {
  let navigateToAdminGuard: CanNavigateToAdminGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CanNavigateToAdminGuard
      ]
    });
  }));

  beforeEach(() => {
    navigateToAdminGuard = TestBed.get(CanNavigateToAdminGuard);
  });

  it('should return true when user already confirmed', () => {
    navigateToAdminGuard.accessGranted = true;
    expect(navigateToAdminGuard.canActivate(null, null)).toBeTruthy();
  });

  it('should return true when user comfims dialog', () => {
    navigateToAdminGuard.accessGranted = false;
    spyOn(window, 'confirm').and.returnValue(true);
    expect(navigateToAdminGuard.canActivate(null, null)).toBeTruthy();
  });

  it('should route to admin area after user comnfiremd dialog', () => {
    navigateToAdminGuard.accessGranted = false;
    spyOn(window, 'confirm').and.returnValue(false);
    expect(navigateToAdminGuard.canActivate(null, null)).toBeFalsy();
  });
});
