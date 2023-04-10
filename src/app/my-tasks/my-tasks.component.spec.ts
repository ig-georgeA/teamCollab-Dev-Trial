import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCalendarModule, IgxListModule, IgxIconModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { MyTasksComponent } from './my-tasks.component';

describe('MyTasksComponent', () => {
  let component: MyTasksComponent;
  let fixture: ComponentFixture<MyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTasksComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxBadgeModule, IgxListModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCalendarModule, IgxListModule, IgxIconModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
