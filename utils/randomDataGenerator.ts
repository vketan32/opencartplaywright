import {faker} from '@faker-js/faker';

export class RandomDataUtil {
    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getFullName(): string {
        return faker.person.fullName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getPhoneNumber(): string {
        return faker.phone.number();
    }

    static getUsername(): string {
        return faker.internet.userName();
    }

    static getPassword(): string {
        return faker.internet.password();
    }

    static getRandomCountry(): string {
        return faker.location.country();
    }

    static getRandomState(): string {
        return faker.location.state();
    }

    static getRandomCity(): string {
        return faker.location.city();
    }

    static getAddress(): string {
        return faker.location.streetAddress();

    }

    static getRandomAddress(): string {
        return `${this.getAddress()}, ${this.getRandomCity()}, ${this.getRandomState()}, ${this.getRandomCountry()} - ${this.getRandomPin()}`;
    }

    static getRandomPin(length: number = 6): string {
        return faker.string.numeric(length);
    }

    static getRandomUUID(): string {
        return faker.string.uuid();
    }

    static getRandomAlphanumeric(length: number): string {
        return faker.string.alphanumeric(length);
    }

    static getRandomNumeric(length: number): string {
        return faker.string.numeric(length);
    }
}
