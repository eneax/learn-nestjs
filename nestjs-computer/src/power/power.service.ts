import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`PowerService: supplying ${watts} watts of power.`);
  }
}
