export default function Interval()
{
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0);
    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return clearInterval(interval)
    }, [counter])

    function handleCounter()
    {
        setCounter(prevCounter => prevCounter + 1);
        console.log(counter)
    }

    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCounter}>Counter</button>
        </>
    )
}