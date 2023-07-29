import TopMenuButton from "./TopMenuButton"

const TopMenu = ({ parts, currentPart, setCurrentPart, setIsLoading }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {parts.map((btnName) => (
                <TopMenuButton
                    key={btnName}
                    btnName={btnName}
                    currentPart={currentPart}
                    setCurrentPart={setCurrentPart}
                    setIsLoading={setIsLoading}
                />
            ))

            }
        </form>
    )
}

export default TopMenu