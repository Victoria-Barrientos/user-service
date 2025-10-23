import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseBoolPipe} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    // GET /users
    @Get()
    @ApiResponse({ status: 200, description: "Return all users."})
    @ApiQuery({
        name: 'deleted',
        required: false,
        type: Boolean,
        description: "Filter by deleted users (true or false)"
    })
    getUsers(@Query('deleted', ParseBoolPipe) deleted: boolean) {
        return this.userService.findAll(deleted)
    }
    
    // GET /users/:id
    @Get(":id")
    @ApiResponse({ status: 200, description: "Return user by id"})
    getOneUser(@Param("id") id: number) {
        return this.userService.findById(id)
    }

    // POST /users/new
    @Post()
    @ApiResponse({ status: 201, description: "User successfully created", type: UserResponseDto})
    @ApiResponse({ status: 400, description: 'Invalid request data' })
    @ApiBody({ type: CreateUserDto})
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    //PUT /users/:id
    @Put(":id")
    @ApiResponse({ status: 200, description: 'User updated successfully', type: UserResponseDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiBody({ type:  UpdateUserDto })
    updateUser(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }

    // DELETE /users/:id
    @Delete(":id")
    @ApiResponse({ status: 204, description: 'User deleted successfully', type: UserResponseDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    removeUser(@Param("id") id: number) {
        return this.userService.remove(id)
    }
}
