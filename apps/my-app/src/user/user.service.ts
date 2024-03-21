import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFoundException } from './user.exception';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.email === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userToUpdate = this.users.find((user) => user.email === id);
    if (!userToUpdate) {
      throw new UserNotFoundException(id);
    }
    const { firstName, lastName, address, email } = updateUserDto;
    // Update user properties
    userToUpdate.firstName = firstName
      ? updateUserDto.firstName
      : userToUpdate.firstName;
    userToUpdate.lastName = lastName
      ? updateUserDto.lastName
      : userToUpdate.lastName;
    userToUpdate.address = address
      ? updateUserDto.address
      : userToUpdate.address;
    userToUpdate.email = email ? updateUserDto.email : userToUpdate.email;

    // You might want to handle password updates securely (e.g., hashing)
    // userToUpdate.password = updateUserDto.password;

    return userToUpdate;
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.email === id);
    console.log(userIndex);
    if (userIndex === -1) {
      throw new UserNotFoundException(id);
    }

    // Remove the user from the array
    this.users.splice(userIndex, 1);

    return `User with ID ${id} has been removed.`;
  }
}
