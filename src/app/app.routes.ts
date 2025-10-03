import { Routes } from '@angular/router';
import { TabelaProdutos } from './tabela-produtos/tabela-produtos';
import { FormProdutos } from './form-produtos/form-produtos';
import { ListCardProdutos } from './list-card-produtos/list-card-produtos';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: 'tabela', component: TabelaProdutos },
    { path: 'novo', component: FormProdutos },
    { path: 'lista', component: ListCardProdutos },
    { path: 'edit/:id', component: FormProdutos },
    { path: '', redirectTo: '/lista', pathMatch: 'full'},
    { path: '**', component: PageNotFound }
];
