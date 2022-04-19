import Image from "next/image";

interface CardDetails {
    swagger: string
}
export default function Card(props: CardDetails) {
    const { swagger } = props;
    return(
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <div className="relative w-full aspect-square">
                <Image
                    src={`https://avatars.dicebear.com/api/bottts/${swagger}.svg`}
                    alt={`The ${swagger} swagger`}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <p className="text-sm font-medium tracking-wide text-center">SWAGGER: <span className="text-indigo-600 dark:text-indigo-300 font-extrabold">{swagger}</span></p>
        </div>
    );
};