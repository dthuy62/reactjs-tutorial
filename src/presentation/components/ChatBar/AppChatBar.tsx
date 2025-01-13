import AppButton from "../AppButton.tsx";
import SvgIconAttached from "../svgs/SvgIconAttached.tsx";
import SvgIconBrowser from "../svgs/SvgIconBrowser.tsx";
import SvgIconVoiceMode from "../svgs/SvgIconVoiceMode.tsx";

export default function AppChatBar() {
  return (
    <div className="input-container flex flex-col absolute bottom-0 w-full">
      <form className="flex flex-col bg-slate-200 rounded-2xl p-3 ">
                <textarea
                  className="chat-input max-h-44 placeholder:text-slate-400 block w-full rounded-md bg-transparent focus:outline-none"
                  placeholder="Search for anything..." name="search"/>
        <div className="flex items-center justify-between">
          <div className="flex">
            <AppButton>
              <SvgIconAttached/>
            </AppButton>
            <AppButton>
              <SvgIconBrowser/>
            </AppButton>
          </div>
          <AppButton style="bg-black rounded-full">

            <SvgIconVoiceMode/>
          </AppButton>


        </div>
      </form>
      <div className="text-center text-xs py-3">
        <p>ChatGPT can make mistakes. Check important info.</p>
      </div>

    </div>
  )
}
