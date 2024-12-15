import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import type { Queue } from 'bullmq';

@Injectable()
export class AppService {
  constructor(@InjectQueue('hello-queue') private helloQueue: Queue) {}
  async getHello() {
    return await this.helloQueue.add('hello', undefined);
  }
}
