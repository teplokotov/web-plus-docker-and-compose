import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { WishesService } from 'src/wishes/wishes.service';
import { OffersController } from './offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Offer } from './entities/offer.entity';
import { Wish } from 'src/wishes/entities/wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offer, Wish])],
  controllers: [OffersController],
  providers: [OffersService, WishesService],
})
export class OffersModule {}
