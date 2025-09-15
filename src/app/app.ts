import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalGato } from './modal-gato/modal-gato';

@Component({
    selector: 'app-root',
    imports: [CommonModule, ModalGato],
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
// Classe principal
export class App {
    protected readonly title = signal('Gatucas');

    gatos: any = [];
    api_key = "live_icce7uXaein3uAv4d3DkET0fkZj1xRwhLcPEoT0anSqgMlF9oFdxz1feS91goBaI";

    constructor(private http: HttpClient) {
        this.get_gatos();
    }

    async get_gatos() {
        try {
            const response = await this.http.get(`https://api.thecatapi.com/v1/images/search?limit=50&api_key=${this.api_key}`).toPromise();

            this.gatos = response || [];
        }
        catch(error: any) {
            console.error("Erro ao buscar dados: ", error?.error);
        }
    }

    mostrarImagemGato = false;
    imagemSelecionada = "";

    abrirImagem(url: string) {
        this.mostrarImagemGato = true;
        this.imagemSelecionada = url;
    }

    fecharImagem() {
        this.mostrarImagemGato = false;
        this.imagemSelecionada = "";
    }
}
