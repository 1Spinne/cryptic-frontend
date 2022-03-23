import {Component, EventEmitter, Input, Output} from '@angular/core';

export type Flavor = 'primary' | 'success' | 'warning' | 'danger' | 'info';


@Component({
  selector: 'design-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() public disabled = false;
  @Input() placeholder: string = "";
  @Input() hintText: string = "";
  @Input() label: string = "";
  @Input() hintColored: boolean = false;
  @Input() public flavor: Flavor = 'primary';

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() public onEnter = new EventEmitter<InputEvent>();

  getLabelColor() {
    if(this.hintColored && !this.disabled && this.flavor != "primary"){
      return "colored";
    } else {
      return "";
    }
  }
}