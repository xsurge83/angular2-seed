 import './ng1-app/app.module';
import { UpgradeAdapter } from '@angular/upgrade';
declare var angular: any;
import { AppModule } from './app/app.module';

let upgradeAdapter = new UpgradeAdapter(AppModule);


upgradeAdapter.bootstrap(document.body, ['phonecatApp']);
