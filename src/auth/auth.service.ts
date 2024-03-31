import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'Signup' };
  }

  signin() {
    return { message: 'Signin' };
  }
}
