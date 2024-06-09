import { notFound } from "next/navigation";

export default function ReviewsDetail({params}:{
    params:{
        productId: string
        reviewsId: string
    }
}) {

    if (parseInt(params.reviewsId)>100){
        notFound()
    }
    return (
        <h1>
            Reviews Detail {params.reviewsId} for Product id: {params.productId  }
        </h1>
    );
}