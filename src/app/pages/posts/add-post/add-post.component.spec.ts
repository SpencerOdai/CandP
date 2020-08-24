import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostComponent ],
      imports: [HttpClientModule, MatDialogModule, FormsModule],
      providers: [
        {provide: MatDialogRef, useValue: {
          close: () => {}
        } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add post on dialog close', () => {
    const spy = spyOn(component['dialogRef'], 'close');
    component['appService'].currentUser = {id: 1, name: 'John'} as any;
    component.add();
    expect(component.post.user as any).toEqual({id: 1, name: 'John'});
    expect(component.post.images).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

});
