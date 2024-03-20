// create-user.dto.ts
export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    address1: string;
    address2: {
      city: string;
      state: string;
      country: string;
      zip: string;
    };
  };
}
