import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto,  UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Hyundai',
        //     model: 'Civic'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee'
        // },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found!`);
        
        return car;
    }

    create(createCarDto: CreateCarDto){
        const car: Car ={
            id: uuid(),
            ... createCarDto,
        }
        this.cars.push(car);
        return car;
    }

    update(id:string,updateCarDto:UpdateCarDto){
        //let por que el valor se modifica
        let CarDB = this.findOneById(id);
        if (updateCarDto.id && updateCarDto.id !== id){
            throw new BadRequestException(`Car id not valid inside body!`)
        }
        this.cars = this.cars.map(car => {
            if (car.id===id){
                CarDB = {
                    ...CarDB, //Esparcimos todo
                    ...updateCarDto, //actualizamos solo los del DTO, puede ser todo o solo uno
                    id //modifico el id por si alguien quiere alterarlo
                }
                return CarDB;
            }
            return car; //si on es el id retorno el mismo objeto
        });
        return CarDB; //retornamos el obj modificado con http
    }

    delete(id: string){
        // const car = this.findOneById(id);
        this.cars = this.cars.filter(car=>car.id!==id);
    }
}
