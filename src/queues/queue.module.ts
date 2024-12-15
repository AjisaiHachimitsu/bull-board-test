// import { Module } from '@nestjs/common';
// import { BullBoardModule } from '@bull-board/nestjs';
// import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
// import { BullModule } from '@nestjs/bullmq';
// import { HelloProcessor } from './hello.processor';

// @Module({
//   imports: [
//     BullModule.registerQueue({
//       name: 'hello-queue',
//     }),
//     BullBoardModule.forFeature({
//       name: 'hello-queue',
//       adapter: BullMQAdapter, //or use BullAdapter if you're using bull instead of bullMQ
//     }),
//   ],
//   // exports: [HelloProcessor],
//   providers: [HelloProcessor],
// })
// export class QueuesModule {}
