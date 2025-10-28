let playlist = [
  {
    nome: "Blood Mary",
    artista: "Lady Gaga",
    genero: "Pop"
  },
  {
    nome: "Smells Like Teen Spirit",
    artista: "Nirvana",
    genero: "Rock"
  },
  {
    nome: "Blinding Lights",
    artista: "The Weeknd",
    genero: "Synthpop"
  }
];

for (const musica of playlist) {
  console.log(`🎵 "${musica.nome}" é uma música de ${musica.artista}, do gênero ${musica.genero}.`);
}
