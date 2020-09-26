import {DestinoViaje} from './destino-viaje.model';
import {Subject, BehaviorSubject } from 'rxjs';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './../models/destinos-viajes-state.models';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
    constructor( private store: Store<AppState>) {
    }
    add(d:DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d));
    }
    elegir(d:DestinoViaje) {
        this.store.dispatch(new ElegidoFavoritoAction(d));
    }

}
