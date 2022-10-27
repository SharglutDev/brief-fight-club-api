import { AppDataSource } from '../data-source';
import { Hero } from '../models/interfaces/HeroInterface';

/**
 * Le role du service est d'aller chercher les données,
 * pour les mettre à disposition de controlleur.
 */
export class HeroService {
  getAllHeros(): Promise<Hero[]> {
    return AppDataSource.query(`SELECT * FROM hero;`);
  }

  getOneHeroById(id: number): Promise<Hero> {
    return AppDataSource.query(``);
  }

  createNewHero(newHero: Hero): Promise<any> {
    return AppDataSource.query(``);
  }

  updateOneHero(id: number, changes: Hero): Promise<any> {
    return AppDataSource.query(``);
  }

  deleteOneHero(id: number): Promise<any> {
    return AppDataSource.query(``);
  }
}
