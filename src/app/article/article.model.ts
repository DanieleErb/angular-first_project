export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  //Js di default propaga l'evento di click a tutti i componenti padre, quindi al click, il browser prova a raggiungere un link vuoto, che causa il refresh della pagina. Quindi dopo aver aumentato di 1, il valore si ripristina dopo il refresh.
  // Quindi impediamo questo comportamento con il return false, che serve per prevenire il comportamento predefinito dell'evento.
  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }

  //domain() è una utility function che estrae il domain da un URL
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
