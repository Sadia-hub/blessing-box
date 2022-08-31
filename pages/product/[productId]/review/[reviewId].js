 import { useRouter } from 'next/router';
 import CustomLayout from '../../../../src/components/layouts/customLayout';
 import Login from '../../../../src/components/ui/support/Login';
function Review() {
    const router = useRouter()
    console.log(router.query)
    const {productId, reviewId} =router.query;
    console.log(123)
    return (<>
    <Login / >
    <h1>Donation {productId} and Project {reviewId} hhhhhhh hello</h1>
    </>)
} 

export default Review;