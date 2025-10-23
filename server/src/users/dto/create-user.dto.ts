import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({ example: "Victoria Barrientos"})
    @IsString()
    name: string;

    @ApiProperty({ example: "viictoriabarrientos@gmail.com"})
    @IsEmail()
    email: string;
}