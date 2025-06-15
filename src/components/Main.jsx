import MangaCard from "./MangaCard"
import datas from "../data";

function Main() {

    const dataElement = datas.map((data) => {
        return (
            <MangaCard 
                id={data.id}
                title={data.title}
                coverImage={{
                src: data.coverImage,
                height: "300px"
                }}
                mangaLink={data.mangaLink}
                chapter={data.chapter}
                chapterTitle={data.chapterTitle}
            />
        )
    })

    return (
        <>
            <main>
                <div className="main-main">
                    {dataElement}
                </div>
            </main>
        </>
    )
}

export default Main