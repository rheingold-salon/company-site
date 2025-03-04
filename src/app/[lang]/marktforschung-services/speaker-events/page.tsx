import { GrayBox } from "@/components";
import { getDictionary } from "@/dictionaries";

export default async function SpeakerPage({
    params,
}: { params: Promise<{ lang: "de" | "en" }> }
) {
    const lang = (await params).lang
    const dict = (await getDictionary(lang)).marketResearchPage.speakerPage;
    return (
        <>
            <GrayBox heading1={dict.heading1} heading2={dict.heading2}>
                {dict.paragraphs.map((text, index) => {
                    return (
                        <p key={index} className="mt-4">{text}</p>
                    );
                })}
            </GrayBox>
        </>

    );
}
