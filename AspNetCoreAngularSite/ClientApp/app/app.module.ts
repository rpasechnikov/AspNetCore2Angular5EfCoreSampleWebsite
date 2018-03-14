import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryThumbnail } from '../gallery/galleryThumbnail.component';

@NgModule({
    declarations: [
        AppComponent,
        GalleryThumbnail
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        GalleryThumbnail
    ]
})
export class AppModule { }
