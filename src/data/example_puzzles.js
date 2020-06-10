export default [
  {
  title: 'Pet Owners',
  story: 'Each of four men owns a different species of exotic pet.  From the following clues, can you figure out each man\'s full name and what kind of pet he owns?',
  clues: ['Mr. Engels (whose pet is named Sparky), Abner, and Mr. Foster all belong to a club for owners of unusual pets.',
    'The iguana isn\'t owned by either Chuck or Duane.',
    'Neither the jackal nor the king cobra is owned by Mr. Foster.',
    'The llama doesn\'t belong to Duane (whose pet is named Waggles).',
    'Abner, who doesn\'t own the king cobra, isn\'t Mr. Gunter.',
    'Bruce and Mr. Foster are neighbors.',
    'Mr. Halevy is afraid of iguanas.'
  ],
  labelSetOne: ['Abner', 'Bruce', 'Chuck', 'Duane'],
  labelSetTwo: ['Engels', 'Foster', 'Gunter', 'Halevy'],
  labelSetThree: ['Iguana', 'Jackal', 'King cobra', 'Llama'],
  solution: [[1, 0, 0],
             [2, 1, 3],
             [3, 2, 2],
             [0, 3, 1]]
  },
  {
    title: 'Pet Owners',
    story: 'Each of four men owns a different species of exotic pet.  From the following clues, can you figure out each man\'s full name and what kind of pet he owns?',
    clues: ['Mr. Engels (whose pet is named Sparky), Abner, and Mr. Foster all belong to a club for owners of unusual pets.',
      'The iguana isn\'t owned by either Chuck or Duane.',
      'Neither the jackal nor the king cobra is owned by Mr. Foster.',
      'The llama doesn\'t belong to Duane (whose pet is named Waggles).',
      'Abner, who doesn\'t own the king cobra, isn\'t Mr. Gunter.',
      'Bruce and Mr. Foster are neighbors.',
      'Mr. Halevy is afraid of iguanas.'
    ],
    labelSetOne: ['Abner', 'Bruce', 'Chuck', 'Duane'],
    labelSetTwo: ['Engels', 'Foster', 'Gunter', 'Halevy'],
    labelSetThree: ['Iguana', 'Jackal', 'King cobra', 'Llama'],
    solution: [[1, 0, 0],
              [2, 1, 3],
              [3, 2, 2],
              [0, 3, 1]] 
  }
]
