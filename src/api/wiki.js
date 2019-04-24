import cio from 'cheerio-without-node-native';

const wiki = "https://oldschool.runescape.wiki/w/"

class Wiki {

 parseForWiki(userText){
    const SearchTerm = userText.split(' ').join('_')
    return wiki + SearchTerm + ""
 }
	
    
}
export default new Wiki();