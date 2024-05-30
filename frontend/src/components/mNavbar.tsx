import * as React from 'react';

import { Card } from './dc/Card';
import { Dock } from './dc/Dock';
import { DockCard } from './dc/DockCard';
import styles from './dc/styles.module.scss';

const GRADIENTS: string[] = [
  'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg',
  'https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg',
];

const mNav: React.FC = () => {
  return (
    <div className={styles.body}>
      <Dock>
        {GRADIENTS.map((src) => (
          <DockCard key={src}>
            <Card src={src} />
          </DockCard>
        ))}
      </Dock>
    </div>
  );
};

export default mNav;
