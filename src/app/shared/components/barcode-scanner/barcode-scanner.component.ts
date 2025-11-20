import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeScannerComponent implements OnInit {
  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;

  currentDevice: MediaDeviceInfo | undefined = undefined;

  readonly BarcodeFormat = BarcodeFormat;
  formats: BarcodeFormat[] = [
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.UPC_A,
    BarcodeFormat.QR_CODE
  ];

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices) => {
      this.currentDevice = devices[0];
    });
  }

  scanCompleteHandler(result: any): void {
    console.log('Scan Complete:', result);
  }

  scanErrorHandler(error: any): void {
    console.error('Scan Error:', error);
  }

  scanSuccessHandler(result: any): void {
    console.log('Scan Success:', result);
  }
}
