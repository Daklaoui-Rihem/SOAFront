import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  template: `
    <div class="alert alert-danger">
      <strong>Vous n'êtes pas autorisé…</strong>
    </div>
  `
})
export class ForbiddenComponent {}