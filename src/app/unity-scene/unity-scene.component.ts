import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unity-scene',
  templateUrl: './unity-scene.component.html',
  styleUrls: ['./unity-scene.component.css']
})
export class UnitySceneComponent implements OnInit {
  roomName: string = "";
  SceneUrl: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const urlEncoded = params['urlEncoded'];
      const decodedUrl = decodeURIComponent(urlEncoded);
      this.SceneUrl = this.sanitizer.bypassSecurityTrustResourceUrl(decodedUrl);
    });

    console.log(this.SceneUrl);
  }
}
