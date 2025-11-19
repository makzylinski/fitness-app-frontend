import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeScannerComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: any;

  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement as HTMLVideoElement;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err) {
          console.log("Something went wrong!");
        });
    }
  }
}
