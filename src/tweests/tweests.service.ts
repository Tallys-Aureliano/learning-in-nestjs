import { Injectable } from '@nestjs/common';
import { CreateTweestDto } from './dto/create-tweest.dto';
import { UpdateTweestDto } from './dto/update-tweest.dto';

@Injectable()
export class TweestsService {
  create(createTweestDto: CreateTweestDto) {
    return 'This action adds a new tweest';
  }

  findAll() {
    return `This action returns all tweests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweest`;
  }

  update(id: number, updateTweestDto: UpdateTweestDto) {
    return `This action updates a #${id} tweest`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweest`;
  }
}
