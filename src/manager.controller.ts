import { Controller, Get } from '@nestjs/common';

@Controller('manager')
export class ManagerController {
  @Get()
  getManager() {
    return { message: 'Ruta /manager activa' };
  }
}
