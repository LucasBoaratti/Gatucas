import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

@Component({
  selector: 'app-modal-gato',
  imports: [CommonModule],
  templateUrl: './modal-gato.html',
  styleUrl: './modal-gato.scss'
})
export class ModalGato {
    @Input() open = false;

    @Input() fecharModalGato!: () => void;

    @Input() imagemGato = "";
}
