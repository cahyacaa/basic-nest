import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto as User } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService){}

  @Post('/')
  create(@Body() user: User): User {
    return this.userService.create(user);
    return user;
  }

  @Get('/')
  async listAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
