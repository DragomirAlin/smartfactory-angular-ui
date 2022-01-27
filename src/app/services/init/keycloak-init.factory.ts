import {KeycloakService} from "keycloak-angular";
import {of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ConfigInitService} from "./config-init.service";
import {fromPromise} from "rxjs-compat/observable/fromPromise";

export function initializeKeycloak(
  keycloak: KeycloakService,
  configService: ConfigInitService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://192.168.49.2' + '/auth',
        realm: "smartfactory",
        clientId: "jwtClient",
      },
      initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: true
      }
    })
}

