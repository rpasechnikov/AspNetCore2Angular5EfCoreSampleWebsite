import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Thumbnail } from '../gallery/thumbnail.component';

@NgModule({
    declarations: [
        AppComponent,
        Thumbnail
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        Thumbnail
    ]
})
export class AppModule { }
