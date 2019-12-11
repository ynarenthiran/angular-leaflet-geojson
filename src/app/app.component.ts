import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // @ViewChild('map') mapElement: ElementRef<any>;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoieW5hcmVudGhpcmFuIiwiYSI6ImNrM2g1dmZ6eDA4Y3czZHFwODJxcHkwdnIifQ.KJGZPDSchfLHQPsok9bZlQ';
    this.configMap();
  }
  configMap() {
    this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
  }
}
