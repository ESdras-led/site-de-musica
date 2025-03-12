let playlists = [];

function cadastrarOuvinte() {
    document.getElementById('form-ouvinte').style.display = 'none';
    document.getElementById('ouvinteInfo').style.display = 'block';
    document.getElementById('playlistSection').style.display = 'block';
}

function criarPlaylist() {
    const nomePlaylist = document.getElementById('nome-playlist').value;
    if (nomePlaylist.trim() !== '') {
        playlists.push(nomePlaylist);
        alert(`Playlist "${nomePlaylist}" criada com sucesso!`);
        document.getElementById('nome-playlist').value = ''; // Limpa o campo
    } else {
        alert("Por favor, insira um nome para a playlist.");
    }
}

function mostrarCriarPlaylist() {
    hideAllPlaylistSections();
    document.getElementById('createPlaylist').style.display = 'block';
}

function mostrarExibirPlaylists() {
    hideAllPlaylistSections();
    const playlistList = document.getElementById('playlistList');
    playlistList.innerHTML = ''; // Limpa a lista antes de exibir
    playlists.forEach((playlist, index) => {
        const li = document.createElement('li');
        li.textContent = playlist;
        playlistList.appendChild(li);
    });
    document.getElementById('showPlaylists').style.display = 'block';
}

function mostrarAtualizarPlaylist() {
    hideAllPlaylistSections();
    document.getElementById('updatePlaylist').style.display = 'block';
}

function atualizarPlaylist() {
    const playlistAntiga = document.getElementById('playlist-antiga').value;
    const novaPlaylist = document.getElementById('nova-playlist').value;

    const index = playlists.indexOf(playlistAntiga);
    if (index !== -1 && novaPlaylist.trim() !== '') {
        playlists[index] = novaPlaylist;
        alert("Playlist atualizada com sucesso!");
        document.getElementById('playlist-antiga').value = '';
        document.getElementById('nova-playlist').value = '';
    } else {
        alert("Playlist não encontrada ou nova playlist inválida.");
    }
}

function mostrarDeletarPlaylist() {
    hideAllPlaylistSections();
    document.getElementById('deletePlaylist').style.display = 'block';
}

function deletarPlaylist() {
    const playlistDeletar = document.getElementById('playlist-deletar').value;

    const index = playlists.indexOf(playlistDeletar);
    if (index !== -1) {
        playlists.splice(index, 1);
        alert("Playlist deletada com sucesso!");
        document.getElementById('playlist-deletar').value = '';
    } else {
        alert("Playlist não encontrada.");
    }
}

function hideAllPlaylistSections() {
    document.getElementById('createPlaylist').style.display = 'none';
    document.getElementById('showPlaylists').style.display = 'none';
    document.getElementById('updatePlaylist').style.display = 'none';
    document.getElementById('deletePlaylist').style.display = 'none';
}
