import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  private userRepo: UserDto[] = [];
  constructor(
    @InjectRepository(UserEntity)
    private userRepos: Repository<UserEntity>,
  ) {}

  create(user: UserDto): UserDto {
    this.userRepo.push(user);
    return user;
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepos.find();
  }
}
