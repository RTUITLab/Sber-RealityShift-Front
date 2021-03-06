import { Component, OnInit } from '@angular/core';
import { ModuleResponse } from 'src/api/models';
import { ModulesService } from 'src/api/services';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {

  constructor(private modulesService: ModulesService) { }

  public modules: ModuleResponse[] = [];

  async ngOnInit(): Promise<void> {
    this.modules = await this.modulesService.apiModulesGet$Json().toPromise();
  }

}
