import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void; //as not returning anything.
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button
            disabled={!!userAnswer ? true : false} //disabled={!!userAnswer} is the same as is we wrote disabled={userAnswer ? true : false}, !! converts a non-Boolean value to Boolean
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
