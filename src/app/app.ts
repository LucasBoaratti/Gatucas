import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalGato } from './modal-gato/modal-gato';
import { firstValueFrom } from 'rxjs';

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

    // Armazenando os gatos no array gatos
    gatos: any = [];
    api_key = "live_icce7uXaein3uAv4d3DkET0fkZj1xRwhLcPEoT0anSqgMlF9oFdxz1feS91goBaI";

    // Criando o construtor para chamar a função que busca os dados dos gatos
    constructor(private http: HttpClient) {
        this.get_gatos();
    }

    // Função assíncrona que busca os dados dos gatos
    async get_gatos() {
        try {
            // Requisição GET para pegar as imagens dos gatos
            const response = await firstValueFrom (
                this.http.get(`https://api.thecatapi.com/v1/images/search?limit=50&api_key=${this.api_key}`)
            );

            // Armazenando a resposta
            this.gatos = response || []; 
        }
        catch(error: any) {
            console.error("Erro ao buscar dados: ", error?.error);
        }
    }

    // Modal de imagens

    mostrarImagemGato = false;
    // Armazenando a URL da imagem do gato clicado
    imagemSelecionada = "";

    // Função para abrir o modal com a imagem
    abrirImagem(url: string) {
        this.mostrarImagemGato = true;
        this.imagemSelecionada = url;
    }

    // Função para fechar o modal
    fecharImagem = () => {
        this.mostrarImagemGato = false;
        this.imagemSelecionada = "";
    }
}
