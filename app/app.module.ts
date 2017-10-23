import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Overlay, AppComponent, Products}
        from './components/components';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

// const appRoutes: Routes = [
//     { path: '', component: BasicForm },
//     { path: 'market', component: AppComponent }
// ];

@NgModule({
    imports: [
        //RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    entryComponents: [Overlay, AppComponent, Products],
    declarations: [ Overlay, AppComponent, Products],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
