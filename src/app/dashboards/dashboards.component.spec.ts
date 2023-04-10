import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { DashboardsComponent } from './dashboards.component';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
