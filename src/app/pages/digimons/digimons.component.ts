import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonService } from '../../shared/services/digimon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-digimons',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DigimonService],
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent {

  digimons: Array<any> = [];

  constructor(
    private readonly digimonService: DigimonService
    ) {
    this.getDigimons();
  }
  
  getDigimons() {
    this.digimonService.getAllDigimons().subscribe(
      (response: any) => {
        console.log(response)
        this.digimons = response.content;
      },
      (error) => {
        console.log(error);
      });
  }

  trackById(index: number, digimon: any): number {
    return digimon.id; // Retorna a chave única para o item
  }
}
