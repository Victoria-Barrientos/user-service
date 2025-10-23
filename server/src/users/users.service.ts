import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository, FindOptionsWhere } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ) {}

    async findAll(deleted?: boolean): Promise<UserResponseDto[]> {
        const where: FindOptionsWhere<User> = typeof deleted === 'boolean' ? { deleted } : {};
        const users = await this.userRepo.find({ where });
        if (!users) throw new NotFoundException('Users not found');
        return plainToInstance(UserResponseDto, users);
    }

    async findById(id: number): Promise<UserResponseDto> {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) throw new NotFoundException('User not found');
        return plainToInstance(UserResponseDto, user);
    }

    async create(dto: CreateUserDto): Promise<UserResponseDto> {
        const user = this.userRepo.create(dto);
        await this.userRepo.save(user);
        return plainToInstance(UserResponseDto, user)
    }

    async update(id: number, dto: UpdateUserDto): Promise<UserResponseDto> {
        const user = await this.userRepo.findOneBy({ id });
        if (!user) throw new NotFoundException('User not found');
        Object.assign(user, dto);
        return this.userRepo.save(user);
    }

    async remove(id: number): Promise<void> {
        await this.userRepo.delete(id);
    }
}
