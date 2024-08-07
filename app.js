function GreatingGM()
{
    const date = new Date();
    const hour = date.getHours();
    const todaydate = date.getDate();
    return
    (
        <h1>Good Morning({hour}:{todaydate})</h1>
    )
    
}
export default GreatingGM;































