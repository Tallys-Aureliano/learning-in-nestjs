import { PartialType } from '@nestjs/mapped-types';
import { CreateTweestDto } from './create-tweest.dto';

export class UpdateTweestDto extends PartialType(CreateTweestDto) {}
