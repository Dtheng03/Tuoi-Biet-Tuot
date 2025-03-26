import Card01Vietnamese from "./card-01-vietnamese";
import Card02Vietnamese from "./card-02-vietnamese";
import Card03Vietnamese from "./card-03-vietnamese";
import Card04Vietnamese from "./card-04-vietnamese";
import Card05Vietnamese from "./card-05-vietnamese";
import Card06Vietnamese from "./card-06-vietnamese";
import Card07Vietnamese from "./card-07-vietnamese";
import Card08Vietnamese from "./card-08-vietnamese";

export default function VietnameseContent() {
    return (
        <div className="space-y-6 mb-6">
            {/* Cards grid */}
            <div className="ml-[5%] flex items-center gap-8">
                {/* Card 1 */}
                <Card01Vietnamese />

                {/* Card 2 */}
                <Card02Vietnamese />

                {/* Card 3 */}
                <Card03Vietnamese />

                {/* Card 4 */}
                <Card04Vietnamese />
            </div>

            <div className="mr-[5%] flex items-center justify-end gap-8">
                {/* Card 5 */}
                <Card05Vietnamese />

                {/* Card 6 */}
                <Card06Vietnamese />

                {/* Card 7 */}
                <Card07Vietnamese />

                {/* Card 8 */}
                <Card08Vietnamese />
            </div>
        </div>
    )

}