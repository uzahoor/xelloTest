import { Component, OnInit, ViewChild, HostListener, ElementRef, Input } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

const ESCAPE_KEYCODE = 27;

@Component({
  selector: 'app-xor-tool-tip',
  templateUrl: './xor-tool-tip.component.html',
  styleUrls: ['./xor-tool-tip.component.scss']
})
export class XorToolTipComponent implements OnInit {

  // Input to determine the labeling of the button and tool tip
  @Input()
  buttonLabel: string;
  @Input()
  toolTipLabel: string;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    // Gives the button and tool tip a default label if none are passed
    this.buttonLabel = (typeof this.buttonLabel === 'undefined') ? "Untitled" : this.buttonLabel;
    this.toolTipLabel = (typeof this.toolTipLabel === 'undefined') ? "Untitled" : this.toolTipLabel;
  }

  @ViewChild('t') public tooltip: NgbTooltip;

  // Closes the tooltip when the 'esc' key is pressed
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.tooltip.isOpen() && event.keyCode === ESCAPE_KEYCODE) {
      this.tooltip.close();
    }
  }

  // Closes the tooltip whenever you click outside the button and tooltip
  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.tooltip.open();
    } else {
      this.tooltip.close();
    }
  }

  // Changes placement of tool tip when at the edge of the screen
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.tooltip.isOpen() && this.eRef.nativeElement.getBoundingClientRect().top < 40) {
      this.tooltip.placement = "bottom";
    } else {
      this.tooltip.placement = "top";
    }
  }
}


