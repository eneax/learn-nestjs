import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('List all messages');
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('Get message with id:', id);
  }
}
