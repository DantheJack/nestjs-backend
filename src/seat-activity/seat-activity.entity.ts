import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SeatActive } from '../seat-active/seat-active.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class SeatActivity {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsInt()
  @Column() duration: number;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeStart: number;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeEnd: number;
  // Relations
  @ManyToOne(type => SeatActive, seatActive => seatActive.seatActivities)
  seatActive: SeatActive;
}
