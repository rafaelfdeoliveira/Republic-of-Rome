import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  @Input() title: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public isOverflowed(element: Element): boolean {
    return element.clientWidth < element.scrollWidth;
  }

  public isAtScrollStart(element: Element): boolean {
    return element.scrollLeft === 0;
  }

  public isAtScrollEnd(element: Element): boolean {
    return element.scrollLeft === element.scrollWidth - element.clientWidth;
  }

  public scrollX(ev: Event, element: Element, direction: 'left' | 'right') {
    ev.stopPropagation();
    let scrollLength = element.clientWidth + 10;
    if (direction === 'left') scrollLength *= -1;
    element.scrollBy({
      top: 0,
      left: scrollLength,
      behavior: 'smooth'
    });
    setTimeout(() => this.changeDetectorRef.detectChanges(), 500);
  }
}
