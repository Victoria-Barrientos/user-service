import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseBoolPipe} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
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
        return [];
    }
    
    // GET /users/:id
    @Get(":id")
    @ApiResponse({ status: 200, description: "Return user by id"})
    getOneUser(@Param("id") id: string) {
        return {
            id
        };
    }

    // POST /users/new
    @Post()
    @ApiResponse({ status: 201, description: "User successfully created", type: UserResponseDto})
    @ApiResponse({ status: 400, description: 'Invalid request data' })
    @ApiBody({ type: CreateUserDto})
    createUser(@Body() createUserDto: CreateUserDto) {
        return {
            name: createUserDto.name
        };
    }

    //PUT /users/:id
    @Put(":id")
    @ApiResponse({ status: 200, description: 'User updated successfully', type: UserResponseDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiBody({ type:  UpdateUserDto })
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return {
            id,
            name: updateUserDto.name
        };
    }

    // DELETE /users/:id
    @Delete(":id")
    @ApiResponse({ status: 204, description: 'User deleted successfully', type: UserResponseDto })
    @ApiResponse({ status: 404, description: 'User not found' })
    removeUser(@Param("id") id: string) {
        return {}
    }
}
