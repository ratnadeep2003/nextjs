export default async function Docs({params}:{
    params: Promise<{slug: string[]}>
}){
    const {slug} = await params;
    if(slug.length === 2){
        return(
            <div>
                <h2>Viewing features for {slug[0]} and  {slug[1]}</h2>
            </div>
        )
    }
    else if(slug.length===1){
        return(
            <div>
                <h2>Viewing deatures for {slug[0]}</h2>
            </div>
        )
    }
    return(
        <div>
            hi from docs
        </div>
    )
}