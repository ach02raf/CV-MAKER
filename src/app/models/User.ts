export class User {
  _id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  constructor(
    _id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string
  ) {
    this._id = _id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
  }
}
