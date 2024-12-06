import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [{  //Se usa para que cuando en la barra de busqueda se ponga xxx/home se muestre la pagina indicada
  path: '', //Se indica la ruta
  component: HomePageComponent // Este es el componente que mostrara
},
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
},
{
  path: '**', //Cualquier ruta que no sea ningula de las anteriores s ele redirigira a la pagina home
  redirectTo: ''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
