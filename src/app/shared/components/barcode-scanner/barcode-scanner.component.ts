import { ChangeDetectionStrategy, Component, AfterViewInit, output, ViewChild } from '@angular/core';
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
export class BarcodeScannerComponent implements AfterViewInit {
  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;

  currentDevice: MediaDeviceInfo | undefined = undefined;

  readonly BarcodeFormat = BarcodeFormat;
  formats: BarcodeFormat[] = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.RSS_14,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_EAN_EXTENSION,
    BarcodeFormat.QR_CODE
  ];

  emitScanResult = output<string | number>();

  ngAfterViewInit(): void {
    if (this.scanner) {
      this.scanner.camerasFound.subscribe((devices) => {
        this.currentDevice = devices?.[0];
      });
    }
  }

  scanErrorHandler(error: any): void {
    console.error('Scan Error:', error);
  }

  scanSuccessHandler(result: any): void {
    this.emitScanResult.emit(result);
  }
}
