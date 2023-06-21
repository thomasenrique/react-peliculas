import { StringSchema } from 'Yup';

declare module 'yup' {
    class StringSchema {
        primeraLetraMayuscula(): this;
    }
}