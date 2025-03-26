import Card01English from "./card-01-english";
import Card02English from "./card-02-english";
import Card03English from "./card-03-english";
import Card04English from "./card-04-english";
import Card05English from "./card-05-english";
import Card06English from "./card-06-english";
import Card07English from "./card-07-english";
import Card08English from "./card-08-english";

export default function EnglishContent() {
    return (
        <div className="space-y-6 mb-6">
            {/* Cards grid */}
            <div className="ml-[5%] flex items-center gap-8">
                {/* Card 1 */}
                <Card01English />

                {/* Card 2 */}
                <Card02English />

                {/* Card 3 */}
                <Card03English />

                {/* Card 4 */}
                <Card04English />
            </div>

            <div className="mr-[5%] flex items-center justify-end gap-8">
                {/* Card 5 */}
                <Card05English />

                {/* Card 6 */}
                <Card06English />

                {/* Card 7 */}
                <Card07English />

                {/* Card 8 */}
                <Card08English />
            </div>
        </div>
    )

}