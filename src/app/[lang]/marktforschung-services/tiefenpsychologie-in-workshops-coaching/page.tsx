import { GrayBox } from "@/components";
import { getDictionary } from "@/dictionaries";

export default async function CoachingPage({
    params,
}: { params: Promise<{ lang: "de" | "en" }> }
) {
    const lang = (await params).lang
    const dict = (await getDictionary(lang)).marketResearchPage.coachingPage;
    return (
        <>
            <GrayBox heading1={dict.heading1} heading2={dict.heading2}>
                <p>{dict.p1}</p>
                <p className="mt-4">{dict.p2}</p>
                <p className="mt-4">{dict.p3}</p>
                <p className="mt-4">{dict.p4}</p>
            </GrayBox>
        </>

    );
}
