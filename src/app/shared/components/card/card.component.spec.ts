import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { PostDetailComponent } from 'src/app/pages/posts/detail/detail.component';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled: HTMLDocument;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    component.data = {
      id: 1,
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec purus felis, blandit non rhoncus quis, tristique vitae elit.
      Suspendisse potenti. Aenean pellentesque libero sem, non ultricies odio laoreet sed.
      Nullam malesuada accumsan sapien vitae bibendum.
      Phasellus viverra, tellus a tempor vulputate, justo enim porttitor mi, vel gravida eros nisl nec eros.
      Donec ultrices dolor ac lorem fermentum dapibus. Quisque feugiat orci eu egestas vulputate.`,
      images: ['image'],
      title: 'title',
      updated: Date.now().toString(),
      userId: 1,
      user: {
        id: 1,
        name: 'John'
      }
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have body text length 50 characters', () => {
    const body: HTMLButtonElement = compiled.querySelector('.content>.body');
    expect(body.innerText.length).toBe(50);
  });

  it('should have 4 buttons in footer', () => {
    const buttons: NodeListOf<HTMLButtonElement> = compiled.querySelectorAll('.footer>button');
    expect(buttons.length).toBe(4);
  });

  it('should have 1 image in content', () => {
    const images: NodeListOf<HTMLImageElement> = compiled.querySelectorAll('.content>.images>img');
    expect(images.length).toBe(1);
  });

  it('should call openDialog method', () => {
    const spy = spyOn(component, 'openDialog');
    const detailEle: HTMLDivElement = compiled.querySelector('.card');

    detailEle.click();

    expect(spy).toHaveBeenCalledWith(component.data);
  });

  it('should call open method on dialog class', () => {
    const spy = spyOn(component.dialog, 'open');
    const detailEle: HTMLDivElement = compiled.querySelector('.card');

    detailEle.click();

    expect(spy).toHaveBeenCalledWith(PostDetailComponent, {data: component.data});
  });

});
