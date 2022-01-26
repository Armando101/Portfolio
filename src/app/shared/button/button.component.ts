import { Component, Input } from '@angular/core';
const DEFAULT_BUTTON_SIZE = 100;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() private readonly size: number;
  @Input() private readonly breakPoint: string;

  public get inlineSize(): string {
    const buttonSize = this.size || DEFAULT_BUTTON_SIZE;
    if (this.breakPoint) {
      return `w-${this.breakPoint}-${buttonSize}`;
    }

    return `w-${buttonSize}`;
  }
}
