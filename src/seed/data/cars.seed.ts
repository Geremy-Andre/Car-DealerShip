import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    },
    // BASE DE DATOS
    {
        id: uuid(),
        brand: 'Audi',
        model: 'A3 Cabrio'
    },
    {
        id: uuid(),
        brand: 'Bugatti',
        model: 'Chiron'
    },
    {
        id: uuid(),
        brand: 'Ferrari',
        model: '488 Spider'
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Explorer'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Accord'
    },
    {
        id: uuid(),
        brand: 'Jaguar',
        model: 'E-Pace'
    },
    {
        id: uuid(),
        brand: 'Lamborghini',
        model: 'Gallardo'
    },
    {
        id: uuid(),
        brand: 'Mazda',
        model: 'CX-3'
    },
    {
        id: uuid(),
        brand: 'Mercedes-Benz',
        model: 'Sprinter'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Murano'
    },
]