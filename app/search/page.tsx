interface SearchPageProps {
    searchParams: { name?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
    const name = searchParams.name;

    return (
        <div>
            <p>{name}</p>
        </div>
    );
}
