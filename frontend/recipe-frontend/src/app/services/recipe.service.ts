import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  base_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any>{
    return this.http.get(`${this.base_URL}recipes`)
  }

  
  CrearteRecipes(payload: any): Observable<any>{
    return this.http.post(`${this.base_URL}recipes`, payload)
  }

  UpdateRecipesById(id: any, payload: any): Observable<any>{
    return this.http.put(`${this.base_URL}recipes/${id}`, payload)
  }

  DeleteRecipesById(id: any): Observable<any>{
    return this.http.delete(`${this.base_URL}recipes/${id}`)
  }

}
