import React from 'react';
import VerseCard from '../components/VerseCard';
import DevotionalCard from '../components/DevotionalCard';

const GridComponents = {
  VerseCard,
  DevotionalCard
};

function shuffleGridItems(verseItems, devotionalItems, isDesktopOrLaptop) {
  if (!devotionalItems.length) {
    return verseItems;
  }

  const devOccurence = isDesktopOrLaptop ? 4 : 3;
  const finalArray = [...verseItems];
  devotionalItems.forEach((item, index) => {
    const insertIndex = devOccurence * (index + 1);
    if (insertIndex < finalArray.length) {
      finalArray.splice(insertIndex, 0, item);
    }
  });
  return finalArray;
}

function getGridContentItems(verses, devotionals, isDesktopOrLaptop) {
  const finalVerses = verses.map((verse) => ({
    content: { ...verse },
    type: 'VerseCard'
  }));
  const finalDevotionals = devotionals.map((devotional) => ({
    content: { ...devotional },
    type: 'DevotionalCard'
  }));
  const content = [
    ...finalDevotionals,
    ...finalVerses
  ];
  return shuffleGridItems(finalVerses, finalDevotionals, isDesktopOrLaptop);
}

function getGridItems(gridItems) {
  return gridItems.map((item, i) => {
    const { type, content, keyword, overrideVerse } = item;
    const Component = GridComponents[type];
    if (!Component) {
      return <VerseCard keyword={keyword} overrideVerse={overrideVerse} />;
    }
    return (
      <Component {...content} key={i} />
    );
  });
}


export default {
  getGridContentItems,
  shuffleGridItems,
  getGridItems
};