type Props = {
    params: Promise<{id: string}>;
};

export default async function BlogPost({ params }: Props){
    const { id } = await params;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Blog Post: {id}</h1>
            <p className="mt-4 ">This is the content of blog post with ID: {id}.</p>
        </div>
    );
}