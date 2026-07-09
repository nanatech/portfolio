import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function AICareerChatPage() {
    return (
        <Container className="py-24">
            <SectionHeading
                eyebrow="Career Assistant"
                title="My AI Career Assistant"
                description="The chat below is a tool built using GPT-4o-mini and Gradio, hosted on Hugging Face Spaces, that allow recruiters to learn more about my career and skills while also being able to personally use one of my many AI projects.
                
                Tip: Leave your name and email for the agent to send me a text to reach out to you."
            />
            <div className="w-full">
                <iframe
                    src="https://nanas03-career-conversation.hf.space"
                    className="h-[800px] w-full rounded-xl border-0"
                    title="Resume Assistant"
                />
            </div>
        </Container>
    )
}