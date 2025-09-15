import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

@Component({
  selector: 'app-modal-gato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-gato.html',
  styleUrl: './modal-gato.scss'
})
export class ModalGato {
    // Definindo o estado do modal como false
    @Input() open = false;

    // Definindo a função para fechar o modal
    @Input() closeModalGato!: () => void;

    // Definindo a URL da imagem do gato como vazio
    @Input() imagemGato = "";
}
