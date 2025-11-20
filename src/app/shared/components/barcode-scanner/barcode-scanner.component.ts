import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeScannerComponent {
  scanCompleteHandler(result: any): void {
    console.log('Scan Complete:', result);
  }

  scanSuccessHandler(result: any): void {
    console.log('Scan Success:', result);
  }


  // @ViewChild('videoElement') videoElement!: any;

  // ngAfterViewInit(): void {
  //   const video = this.videoElement.nativeElement as HTMLVideoElement;
  //   if (navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true })
  //       .then(function (stream) {
  //         video.srcObject = stream;
  //       })
  //       .catch(function (err) {
  //         console.log("Something went wrong!");
  //       });
  //   }
  // }
}
