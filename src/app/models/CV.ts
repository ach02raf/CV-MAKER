import { Education } from './Education';
import { ExperienceProfessionnelle } from './ExperienceProfessionnelle';
import { Liens } from './Liens';

export class CV {
  nom: string;
  prenom: string;
  phone: string;
  email: string;
  urlImage: string;
  adresse: string;
  apropos: string;
  nationalite: string;
  etatCivil: string;
  dateNaissance: Date;
  liens: Liens[] = [];
  loisirs: string[] = [];
  experiencesPro: ExperienceProfessionnelle[] = [];
  educations: Education[] = [];
  competences: string[] = [];
  coleurThemeElement: string;
  coleurThemeTitre: string;
  titreFontSize: string;
  texteFontSize: string;
  fontFamily: string;
}
