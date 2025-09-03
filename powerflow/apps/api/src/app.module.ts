import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SimulationModule } from './simulation/simulation.module';
import { HardwareModule } from './hardware/hardware.module';
import { WebSocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SimulationModule,
    HardwareModule,
    WebSocketModule,
  ],
})
export class AppModule {}