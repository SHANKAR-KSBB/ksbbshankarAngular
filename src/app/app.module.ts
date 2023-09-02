import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIComponent } from './material-ui/material-ui.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ChangePipe } from './change.pipe';
import { CPipeComponent } from './cpipe/cpipe.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { IterateInterceptor } from './iterate.interceptor';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MaterialUIComponent,
    UserComponent,
    ChangePipe,
    CPipeComponent,
    InterceptorComponent,
    HeaderComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
    
  ],
  providers: [DataService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:IterateInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
