import { Controller } from '@nestjs/common';

import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  run() {
    return {
      cpu: this.cpuService.compute(2, 3),
      disk: this.diskService.getData(),
    };
  }
}
