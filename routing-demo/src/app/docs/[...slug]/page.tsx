export default async function Docs({params}:{
    params: Promise<{ slug?: string[] }>
}){
    // If slug is undefined, default it to an empty array []
    const { slug = [] } = await params;

    if(slug.length === 2){
        return(
            <div>
                <h2>Viewing features for {slug[0]} and concept {slug[1]}</h2>
            </div>
        )
    }
    else if(slug.length === 1){
        return(
            <div>
                <h2>Viewing features for {slug[0]}</h2>
            </div>
        )
    }
    return(
        <div>
            hi from docs
        </div>
    )
}