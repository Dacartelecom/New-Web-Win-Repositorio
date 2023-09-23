'use client'
import { FC } from 'react'
import SectionButton from './SectionButton';
import { SectionsProps } from '../interfaces/SectionsProps';

const SECTIONS: string[] = [
  'Planes Trío',
  'Planes Dúo',
  'Planes Gamer Trío',
  'Planes Gamer Dúo',
];

const Sections: FC<SectionsProps> = ({
  selectedIndex,
  setSelectedIndex
}) => {

  return (
    <div
        className="
          sections
          grid
          max-md:grid-rows-4
          max-md:gap-4
          max-md:px-12
          max-md:py-5
          max-xl:gap-0
          max-xl:px-20
          lg:grid-cols-4
          xl:grid-cols-4
          xl:gap-0
          xl:py-0
        "
      >
        {
          SECTIONS.map((item, index) => (
            <SectionButton
              key={ index }
              text={ item }
              selected={ index === selectedIndex }
              onClick={ () => setSelectedIndex(index) }
            />
          ))
        }
      </div>
  )
}

export default Sections;
