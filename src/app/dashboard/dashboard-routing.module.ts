import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from '../about/about.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ServiceComponent } from './service/service.component';
import { OutdoorshadingComponent } from './outdoorshading/outdoorshading.component';
import { IndoorshadingComponent } from './indoorshading/indoorshading.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'inspiration',
    component:InspirationComponent
  },
  {
    path:"Service",
    component:ServiceComponent
  },
  {
    path:"outdoorshading",
    component:OutdoorshadingComponent
  },
  {
    path:"indoorshading",
    component:IndoorshadingComponent
  },
  {
    path:"footer",
    component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
