import { useAppSelector, useAppDispatch } from '@/hooks/useReduxHook';
import { increment, incrementAsyncByAmount } from '../store/redecers/homeReducer'
const Page1 = () => {
    const count = useAppSelector((state) => state.home.value)
    const dispatch = useAppDispatch();
    return (
        <>
            <div>{count}</div>
            <div>这是page1的页面内容</div>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(incrementAsyncByAmount(10))}>+10</button>
        </>

    )
}
export default Page1
