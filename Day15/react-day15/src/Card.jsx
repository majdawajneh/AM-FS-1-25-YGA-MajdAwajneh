function Card({FirstName, LastName, Age, Major})
{
    return (<div className="card" style={{
      borderRadius: '50px',
      width: '400px',
      textAlign: 'center',
      boxShadow: '2px 1px 4px 3px rgb(243, 0, 0)'
    }}>
        <h4>{FirstName} {LastName} {Age} {Major}</h4>
    </div>);
}
export default Card;
