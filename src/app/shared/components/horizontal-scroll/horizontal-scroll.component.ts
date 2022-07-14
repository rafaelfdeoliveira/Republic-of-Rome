import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  @Input() title: string;

  public isOverflowed(element: Element): boolean {
    return element.clientWidth < element.scrollWidth;
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
  }
}
