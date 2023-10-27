import { Proficiency } from 'src/models/proficiency';

import { User } from '../../models/user';

export const USERS: User[] = [
  {
    name: 'Kramer',
    photoUrl:'https://alchetron.com/cdn/cosmo-kramer-608b1415-5697-4523-8b96-fce924de29d-resize-750.jpeg',
    email: 'email',
    password: '12345',
    wage: 1000,
    telephone: '123456',
    address: {
      city: 'Olinda',
      district: 'Ouro Preto',
      number: '100',
      state: 'PE',
      street: 'Rua Assai',
      zipCode: '40000000',
    },
    curriculum: {
      bio: 'é nóis',
      skills: [
        { name: 'React', proficiency: Proficiency.HIGH },
        { name: 'Java', proficiency: Proficiency.VERY_HIGH },
        { name: 'PHP', proficiency: Proficiency.VERY_LOW },
      ],
    },
  } as User,
];
