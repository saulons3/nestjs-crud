import { IsString, MinLength, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateCatDto {

    @IsString()
    @MinLength(1)
    @IsOptional()
    name?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    age?: number;

    @IsString()
    @IsOptional()
    breed?: string;


}
