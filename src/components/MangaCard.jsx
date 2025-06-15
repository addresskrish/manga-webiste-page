function MangaCard({mangaLink, coverImage, title, chapter, chapterTitle}) {
    return (
        <>
            <a href={mangaLink}>
                <div className="main-1">
                    <img src={coverImage.src} height={coverImage.height} />
                    <h2>{title}</h2>
                    <h3>{chapter}</h3>
                    <p>{chapterTitle}</p>
                </div>
            </a>
        </>
    )
}

export default MangaCard