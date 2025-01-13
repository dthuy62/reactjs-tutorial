import AppButton from "./components/AppButton.tsx";
import {ChatOnboardingSubject} from "../domain/models/enums.ts";
import {getEnumValues} from "../core/utils/utils.ts";
import {useState} from "react";

export default function ChatOnboarding() {
  const [subjects, setSubjects] = useState<ChatOnboardingSubject[]>([
    ChatOnboardingSubject.CreateImage,
    ChatOnboardingSubject.SummarizeText,
    ChatOnboardingSubject.MakeAPlan,
    ChatOnboardingSubject.GetAdvice
  ])

  const handleLoadMoreSubjects = () => {
    const newSubjects = [
      ChatOnboardingSubject.Code,
      ChatOnboardingSubject.Brainstorm,
      ChatOnboardingSubject.MakeAPlan,
      ChatOnboardingSubject.AnalyzeData,
    ];
    setSubjects([...subjects, ...newSubjects]);
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="my-auto">
        <h1 className="text-center">What can I help with?</h1>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {getEnumValues(subjects).map((item, index) => {
            if(index == subjects.length - 1) {
              return <AppButton style={`border rounded-full`} key="more" text="More" onClick={handleLoadMoreSubjects}/>
            }
            return <AppButton  style={`border rounded-full`} key={item} text={item} />

          })}
        </div>
      </div>


    </div>
  )
}
