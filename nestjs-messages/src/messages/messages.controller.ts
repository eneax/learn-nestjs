import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('List all messages');
  }

  @Post()
  createMessage() {
    console.log('Create a message');
  }

  @Get('/:id')
  getMessage() {
    console.log('Get a specific message');
  }
}
