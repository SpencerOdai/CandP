import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostDetailComponent } from './detail.component';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
      imports: [ HttpClientModule, SharedModule, MatDialogModule ],
      providers: [
        {provide: MatDialogRef, useValue: {} },
        {provide: MAT_DIALOG_DATA, useValue: {
            id: 1,
            body: `body`,
            images: ['image'],
            title: 'title',
            updated: Date.now().toString(),
            userId: 1,
            user: {
              id: 1,
              name: 'John'
            }
        }
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to previous index', () => {
    component.currentImageIndex = 2;
    component.prev();

    expect(component.currentImageIndex).toBe(1);
  });

  it('should go to next index', () => {
    component.currentImageIndex = 1;
    component.data.images = ['1', '2', '3', '4'];
    component.next();

    expect(component.currentImageIndex).toBe(2);
  });

  it('should not go to previous index', () => {
    component.currentImageIndex = 0;
    component.prev();

    expect(component.currentImageIndex).toBe(0);
  });

  it('should not go to next index', () => {
    component.currentImageIndex = 4;
    component.data.images = ['1', '2', '3', '4'];
    component.next();

    expect(component.currentImageIndex).toBe(4);
  });

  it('should push data to messages', () => {

    component.pushMessage('hello');

    expect(component.messages.length).toBe(1);
  });
});
