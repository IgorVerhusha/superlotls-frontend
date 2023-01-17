import React, { FC, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { sliceIntoChunks } from '@utils/array-utils';
import cn from 'classnames';

type accordionItemType = {
  title: string
  content: string | React.ReactNode
}

type Props = {
  accordionItems: accordionItemType[]
}


type AccordionItemProps = {
  title: string
  content: string | React.ReactNode
  index1: number
  index2: number
  showText: number | null
  handleShowText: (index: number) => void
}

const AccordionItem: FC<AccordionItemProps> = (
  {index1, index2, handleShowText, showText, title, content}
) => {
  const accordionTitle = useRef<HTMLDivElement>(null);
  const accordionItem = useRef<HTMLDivElement>(null);
  const currentIndex = (index1 * 6) + index2;
  return <div
   onClick={() => handleShowText(currentIndex)}
   style={{maxHeight: `${accordionTitle.current?.offsetHeight as number + (showText === currentIndex 
       ? accordionItem.current?.offsetHeight as number : 0)}px`}}
   className={styles.accordionItem}>
    <div
      ref={accordionTitle}
      className={cn(styles.accordionTitle, { [styles.show]: showText === currentIndex })}>
      {title}
    </div>
    <div ref={accordionItem} className={styles.accordionContent}>
      {content}
    </div>
  </div>
}

export const Accordion: FC<Props> = ({ accordionItems }) => {
  const accordionItemsArray = sliceIntoChunks<accordionItemType>(accordionItems, 6);
  const [showText, setShowText] = useState<number | null>(null);

  const handleShowText = (index: number) => {
    if (index === showText) {
      setShowText(null);
      return;
    }
    setShowText(index);
  };
  return (
    <div className={styles.accordionWrap}>
      {accordionItemsArray.map((item, index1) => <div key={index1} className={styles.accordion}>
        {item.map(({ title, content }, index2) => <AccordionItem
          key={(index1 * 6) + index2}
          index1={index1}
          index2={index2}
          title={title}
          content={content}
          handleShowText={handleShowText}
          showText={showText}
        />)}
      </div>)}
    </div>
  );
};
