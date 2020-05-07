export interface Message {
  aName: string;
  eName: string;
  copy: string;
  img: string;
  id: number;
}

const messages: Message[] = [
  {
    aName: 'Har Gow',
    eName: 'Shrimp Dumplings',
    copy: 'The KING of dim sum, the har gao, is the benchmark of any dim sum restaurant in Hong Kong.',
    img: 'https://s28056.pcdn.co/wp-content/uploads/2019/05/best-har-gow-in-hong-kong-433x333.jpg.webp',
    id: 0
  },
  {
    aName: 'Siu Mai',
    eName: 'Pork Dumplings',
    copy: 'Filled with minced pork, bamboo shoots, water chestnut, and garnished with crab roe or sometimes even caviar, these juicy dumplings pop in your mouth with juice and you won’t be able to stop eating!',
    img: 'https://assets3.thrillist.com/v1/image/1622212/381x254/crop;jpeg_quality=65.jpg',
    id: 1
  },
  {
    aName: 'Lo Bak Go',
    eName: 'Turnip Cake',
    copy: 'The lo bak go is a surprisingly delicious dim sum dish, considering it’s mainly just radish and rice flour batter.',
    img: 'https://s28056.pcdn.co/wp-content/uploads/2019/05/luobogao-radish-cake-in-hong-kong-at-tim-ho-wan-433x333.jpg.webp',
    id: 2

  },
  {
    aName: 'Cheong Fun',
    eName: 'Assorted Meat Rice Noodle Roll in Sauce',
    copy: 'Rice flour water is splashed onto a hot metal tray and steamed while adding on your ingredients of choice like shrimp, bbq pork, bean sprouts, or crunchy bean curd skin.',
    img: 'https://s28056.pcdn.co/wp-content/uploads/2019/05/rice-noodle-rolls-cheong-fen-shrimp-rolls-in-hong-kong-dim-sum-restaurant-433x333.jpg.webp',
    id: 3
  },
  {
    aName: 'Zi Jup Paai Gwat',
    eName: 'Steamed Pork Ribs',
    copy: 'Pork ribs are chopped into tiny pieces and steamed with black bean sauce.',
    img: 'https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/psbpfivjzmz9t4kkdes8/spare-ribs',
    id: 4
  },
  {
    aName: 'Ngao Yuk',
    eName: 'Beef meatballs',
    copy: 'Steamed and flavored with dried tangerine peel and watercress, these taste light and fresh',
    img: 'https://assets3.thrillist.com/v1/image/1622204/381x254/crop;jpeg_quality=65.jpg',
    id: 5
  },
  {
    aName: 'Zhaliang',
    eName: 'Stuffed Rice Noodle Roll',
    copy: 'Zhaliang is a Cantonese dim sum dish consisting of crispy Chinese fried dough (youtiao) wrapped inside silky rice noodles.',
    img: 'https://images.firstwefeast.com/complex/images/c_limit,f_auto,fl_lossy,q_auto,w_1100/fobbbhjaswxnreiteuae/rice-noodles',
    id: 6
  },
  {
    aName: 'Don Tot',
    eName: 'Egg Tart',
    copy: 'Tiny vanilla egg custard pie.',
    img: 'https://assets3.thrillist.com/v1/image/1622206/381x254/crop;jpeg_quality=65.jpg',
    id: 7
  },
  {
    aName: 'Ham Sui Gok',
    eName: 'Fried Shrimp on Sugar Cane',
    copy: 'Battered and fried shrimp on a sugar cane that can also be eaten',
    img: 'https://assets3.thrillist.com/v1/image/1622208/381x254/crop;jpeg_quality=65.jpg',
    id: 7
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
