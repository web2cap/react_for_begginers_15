const TopMenuButton = ({ btnName, currentPart, setCurrentPart, setIsLoading }) => {
    return (
        <button
            className={btnName === currentPart ? 'selected' : null}
            onClick={(e) => {
                setCurrentPart(btnName)
                setIsLoading(true)
            }}
        >{btnName}</button>
    )
}

export default TopMenuButton