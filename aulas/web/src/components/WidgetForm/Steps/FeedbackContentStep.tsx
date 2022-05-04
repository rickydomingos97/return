import { FeedbackType, feedbackTypes } from "..";
import { CloseButtom } from "../../CloseButtom";

interface FeesbackContentStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({ feedbackType}: FeesbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]


        return (
            //fragment no react <> para poder envolver os conteudos
          <>
            <header>
              <span className="text-xl leading-6">
                  <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                  {feedbackTypeInfo.title}
              </span>
              <CloseButtom />
            </header>
      
            <div className="flex py-8 gap-2 w-full">
              
            </div>
          </>
        )
}