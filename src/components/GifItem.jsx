// eslint-disable-next-line react/prop-types
export const GifItem = ({title, url}) => {
    return (
        <div className='card'>
            <p>{<title></title>}</p>
            <img src={url} alt={title}/>
        </div>

    )

}