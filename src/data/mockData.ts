import { faker } from '@faker-js/faker';
import { Property, Agent, Subscription } from '../types';

// Generate mock properties
export const generateProperties = (count: number = 12): Property[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    title: faker.helpers.arrayElement([
      'Modern Downtown Apartment',
      'Luxury Villa with Pool',
      'Cozy Family Home',
      'Penthouse with City Views',
      'Beachfront Condo',
      'Mountain Retreat Cabin',
      'Historic Townhouse',
      'Contemporary Loft'
    ]),
    description: faker.lorem.paragraph(3),
    price: faker.number.int({ min: 150000, max: 2000000 }),
    location: `${faker.location.city()}, ${faker.location.state()}`,
    bedrooms: faker.number.int({ min: 1, max: 6 }),
    bathrooms: faker.number.int({ min: 1, max: 4 }),
    area: faker.number.int({ min: 800, max: 5000 }),
    images: Array.from({ length: 5 }, () => 
      `https://images.unsplash.com/photo-${faker.helpers.arrayElement([
        '1564013779-cd31e7a0eb84', '1570129477492-45c003edd2be',
        '1605276374104-2cf6aa1d6c02', '1582268611958-ebfd161ef9cf',
        '1600596542815-ffad4c1539a9', '1600607687939-ce8a6c25118c'
      ])}?w=800&h=600&fit=crop`
    ),
    type: faker.helpers.arrayElement(['house', 'apartment', 'condo', 'villa']),
    status: faker.helpers.arrayElement(['sale', 'rent']),
    featured: index < 4,
    agentId: faker.string.uuid()
  }));
};

// Generate mock agents
export const generateAgents = (count: number = 8): Agent[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    avatar: `https://images.unsplash.com/photo-${faker.helpers.arrayElement([
      '1507003211169-0a1dd7ef0a99', '1494790108755-74b8d0a0444a',
      '1472099645785-5658abf4ff4e', '1507591064344-4c6ce005b128',
      '1438761681033-6461ffad8d80', '1500648767791-00dcc994a43e'
    ])}?w=150&h=150&fit=crop&crop=face`,
    bio: faker.lorem.paragraph(2),
    experience: faker.number.int({ min: 2, max: 15 }),
    properties: faker.number.int({ min: 15, max: 100 }),
    rating: parseFloat(faker.number.float({ min: 4.0, max: 5.0 }).toFixed(1)),
    specialization: faker.helpers.arrayElements([
      'Residential', 'Commercial', 'Luxury', 'Investment', 
      'First-time Buyers', 'Relocation', 'Waterfront', 'Historic Properties'
    ], { min: 2, max: 4 })
  }));
};

// Subscription plans
export const subscriptionPlans: Subscription[] = [
  {
    id: '1',
    name: 'Basic',
    price: 29,
    period: 'monthly',
    features: [
      'Up to 5 property listings',
      'Basic analytics',
      'Email support',
      'Standard photos',
      'Basic property promotion'
    ]
  },
  {
    id: '2',
    name: 'Professional',
    price: 79,
    period: 'monthly',
    popular: true,
    features: [
      'Up to 25 property listings',
      'Advanced analytics',
      'Priority support',
      'Professional photography',
      'Virtual tour integration',
      'Social media promotion',
      'Lead management tools'
    ]
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 199,
    period: 'monthly',
    features: [
      'Unlimited property listings',
      'Custom analytics dashboard',
      'Dedicated account manager',
      'Professional photography & staging',
      'Virtual & AR tours',
      'Multi-platform marketing',
      'Advanced lead management',
      'API access',
      'White-label solution'
    ]
  }
];
