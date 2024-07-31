import wordsPl from '../dictionary/words_PL.json';
import WordCard, { IWord } from '../coponents/WordCard.tsx';
import { nanoid } from 'nanoid';

const WordsPage: React.FC = () => {
  return (
    <section>
      <h2>Words</h2>
      <ul className="flex flex-wrap gap-3 ">
        {wordsPl.words_PL.map((word: IWord, idx) => (
          <li key={word.id}>
            <WordCard
              className="border-solid border-2 rounded p-2"
              item={word}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WordsPage;
