export default async function ProductDetails({params}:{
    params: Promise<{productId: string}>; //When this promise resolves, the resulting object will have a key named productId whose value is a string
}){
    const productId = (await params).productId
    return (
        <div>
            Details about product {productId}
        </div>
    )
}