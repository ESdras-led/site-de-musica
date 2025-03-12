let musicasArtista = [];

function cadastrarArtista() {
    document.getElementById('form-artista').style.display = 'none';
    document.getElementById('artistaInfo').style.display = 'block';
    document.getElementById('playlistSection').style.display = 'block';
}

function criarMusica() {
    const nomeMusica = document.getElementById('nome-musica').value;
    if (nomeMusica.trim() !== '') {
        musicasArtista.push(nomeMusica);
        alert(`Música "${nomeMusica}" criada com sucesso!`);
        document.getElementById('nome-musica').value = ''; // Limpa o campo
    } else {
        alert("Por favor, insira um nome para a música.");
    }
}

function mostrarCriarMusica() {
    hideAllMusicaSections();
    document.getElementById('createMusica').style.display = 'block';
}

function mostrarExibirMusicas() {
    hideAllMusicaSections();
    const musicaList = document.getElementById('musicaList');
    musicaList.innerHTML = ''; // Limpa a lista antes de exibir
    musicasArtista.forEach((musica, index) => {
        const li = document.createElement('li');
        li.textContent = musica;
        musicaList.appendChild(li);
    });
    document.getElementById('showMusicas').style.display = 'block';
}

function mostrarAtualizarMusica() {
    hideAllMusicaSections();
    document.getElementById('updateMusica').style.display = 'block';
}

function atualizarMusica() {
    const musicaAntiga = document.getElementById('musica-antiga').value;
    const novaMusica = document.getElementById('nova-musica-artista').value;

    const index = musicasArtista.indexOf(musicaAntiga);
    if (index !== -1 && novaMusica.trim() !== '') {
        musicasArtista[index] = novaMusica;
        alert("Música atualizada com sucesso!");
        document.getElementById('musica-antiga').value = '';
        document.getElementById('nova-musica-artista').value = '';
    } else {
        alert("Música não encontrada ou nova música inválida.");
    }
}

function mostrarDeletarMusica() {
    hideAllMusicaSections();
    document.getElementById('deleteMusica').style.display = 'block';
}

function deletarMusica() {
    const musicaDeletar = document.getElementById('musica-deletar').value;

    const index = musicasArtista.indexOf(musicaDeletar);
    if (index !== -1) {
        musicasArtista.splice(index, 1);
        alert("Música deletada com sucesso!");
        document.getElementById('musica-deletar').value = '';
    } else {
        alert("Música não encontrada.");
    }
}

function hideAllMusicaSections() {
    document.getElementById('createMusica').style.display = 'none';
    document.getElementById('showMusicas').style.display = 'none';
    document.getElementById('updateMusica').style.display = 'none';
    document.getElementById('deleteMusica').style.display = 'none';
}
