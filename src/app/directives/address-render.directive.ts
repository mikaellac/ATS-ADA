import { ZipPipe } from '../pipes/zip.pipe';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Address } from 'src/models/address';

@Directive({
  selector: '[appAddressRender]',
})
export class AddressRenderDirective implements OnInit {
  @Input() address?: Address = new Address('', '', '', '', '', '');

  ngOnInit(): void {
    if (this.address) {
      this.el.nativeElement.innerText = `Address: ${this.address.street} ${
        this.address.number
      }, ${this.address.district} - ${this.zipPipe.transform(
        this.address.zipCode
      )} - ${this.address.city}/${this.address.state}`;
    }
  }

  constructor(private el: ElementRef, private zipPipe: ZipPipe) {}
}
