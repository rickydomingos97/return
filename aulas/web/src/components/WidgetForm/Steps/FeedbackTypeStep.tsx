import { FeedbackType, feedbackTypes } from "..";
import { CloseButtom } from "../../CloseButtom";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

// export function FeedbackTypeStep(propos: FeedbackTypeStepProps)
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
      //fragment no react <> para poder envolver os conteudos
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback!</span>
        <CloseButtom />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent  hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              //onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  )
}
