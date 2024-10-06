import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-launch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent {
  mode: string | null = null;
  appsSelected = false;
  activeTab: string = 'app1'; // Onglet actif par défaut
  selectedApps = {
    app1: false,
    app2: false,
    app3: false,
  };

  app1Component: any = null;
  app2Component: any = null;
  app3Component: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.mode = params.get('mode');
      if (this.mode === 'classic') {
        this.appsSelected = true;
        this.selectedApps = { app1: true, app2: true, app3: true };
        this.loadComponents();
      }
    });
  }

  launchSelectedApps() {
    this.appsSelected = true;
    this.loadComponents(); // Charger les composants des apps sélectionnées
  }

  loadComponents() {
    if (this.selectedApps.app1 || this.mode === 'classic') {
      loadRemoteModule({ remoteName: 'app1', exposedModule: './Component' })
        .then((m) => this.app1Component = m.AppComponent);
    }

    if (this.selectedApps.app2 || this.mode === 'classic') {
      loadRemoteModule({ remoteName: 'app2', exposedModule: './Component' })
        .then((m) => this.app2Component = m.AppComponent);
    }

    if (this.selectedApps.app3 || this.mode === 'classic') {
      loadRemoteModule({ remoteName: 'app3', exposedModule: './Component' })
        .then((m) => this.app3Component = m.AppComponent);
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
