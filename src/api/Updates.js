import cio from 'cheerio-without-node-native';

class Updates {
    constructor() {
        this.articles = []
    }
    
    async findUpdates(){
        let url = 'https://oldschool.runescape.com'
        let array = []
        await fetch(`${url}`).then((response) => response.text()).then((body) => {    
            const $ = cio.load(body)
            const allItems = $(".news-article")
            allItems.each(function(i) {
                const articleTitle = $(".news-article__title").eq(i).text()
                const articleTime = $(".news-article__time").eq(i).text()
                const articleSummary = $(".news-article__summary").eq(i).text().slice(0, -13)
                const articleImage = $(".news-article__figure-img").eq(i).attr('src')
                const articleLink = $(".news-article__figure-link").eq(i).attr('href')
                const newObject = {
                    title: articleTitle,
                    time: articleTime,
                    summary: articleSummary,
                    image: articleImage,
                    link: articleLink
                }
                array.push(newObject)
            })
            this.articles = array
        }).catch(function(err) {
            console.log(err)
        });
        return array
    };   
    
    async getArticles(){
        return this.articles
    }
    
	
    
}
export default new Updates();