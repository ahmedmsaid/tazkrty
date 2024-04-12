import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faCopy, faShare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Clipboard } from '@angular/cdk/clipboard';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('para') linkElement!: ElementRef;
  qrLink: string = '';
  //icons
  faTrash = faTrashAlt;
  faCopy = faCopy;
  faShare = faShare;
  constructor(private clipboard: Clipboard) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.qrLink = this.linkElement.nativeElement.textContent;
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }

}
