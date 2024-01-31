import seahawks from '../assets/1.png'
import steelers from '../assets/2.png'
import falcons from '../assets/3.png'
import ravens from '../assets/4.png'
import bucs from '../assets/5.png'
import bills from '../assets/6.png'
import niners from '../assets/7.png'
import bears from '../assets/8.png'

// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: seahawks },
    { image: steelers },
    { image: falcons },
    { image: ravens },
    { image: bucs },
    { image: bills },
    { image: niners },
    { image: bears },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;