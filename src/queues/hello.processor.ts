import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('hello-queue')
export class HelloProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log('hello-queue');
    return;
  }
}
