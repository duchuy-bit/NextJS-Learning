export default function Docs({params}:{
    params:{
        slug:string[]
    }
}) {

    if (params.slug?.length === 2){
        return <h1>Viewing docs for the feature: {params.slug[0]} and: {params.slug[1]}</h1>
    }else if (params.slug?.length === 1){
        return <h1>Viewing docs for one Slug: {params.slug[0]}</h1>
    };
    return (
        <h1>Docs home page </h1>
    );
}