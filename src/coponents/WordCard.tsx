import React, { FunctionComponent } from 'react';

export interface IWord {
  id?: string;
  pl: string;
  uk: string;
  serf: string;
  partOfSpeech: string;
}

interface WordCardProps {
  item: IWord;
  className?: string;
}

const WordCard: FunctionComponent<WordCardProps> = ({ item, className }) => {
  if (!item) return null;
  return (
    <div className={className}>
      <p>
        {item.pl} - {item.uk}
      </p>
      <p>Sertification: {item.serf}</p>
      <p>Part of speach: {item.partOfSpeech}</p>
    </div>
  );
};

export default WordCard;
