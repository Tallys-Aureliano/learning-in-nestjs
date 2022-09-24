import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweestsService } from './tweests.service';
import { CreateTweestDto } from './dto/create-tweest.dto';
import { UpdateTweestDto } from './dto/update-tweest.dto';

@Controller('tweests')
export class TweestsController {
  constructor(private readonly tweestsService: TweestsService) {}

  @Post()
  create(@Body() createTweestDto: CreateTweestDto) {
    return this.tweestsService.create(createTweestDto);
  }

  @Get()
  findAll() {
    return this.tweestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweestDto: UpdateTweestDto) {
    return this.tweestsService.update(+id, updateTweestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweestsService.remove(+id);
  }
}
