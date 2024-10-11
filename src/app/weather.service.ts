import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = 'fda2b1bba193a3970fef65e5e153168f';
  apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  // Mengambil cuaca berdasarkan nama kota
  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return throwError(error);
      })
    );
  }

  // Mengambil cuaca berdasarkan koordinat
  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return throwError(error);
      })
    );
  }
}
