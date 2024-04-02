import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  professor: string[] = ["Marion", "Guilherme", "Adriano", "Rogerio", "Vitor", "Marcao"]
}
