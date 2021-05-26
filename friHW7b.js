const express = require('express');

const app = express();
let port = 3000;

app.use(express.static('public'));

let albums = [{  
    name:"Upbeats and Beatdowns",
    publishDate:"1997",
    imgURL: url="https://en.wikipedia.org/wiki/Upbeats_and_Beatdowns#/media/File:UpbeatsAndBeatDowns.jpg",

songTitles:["The Old West","Where Zero Meets 15", "Anthem", "Faking Life", "Shut Up", "Arnold & Willis & Mr. Drummond", "I Feel Lucky", "Milestone", "Beautiful America", "Combat Chuck", "Amalgamate", "Everywhere I Go", "A Flowery Song", "Third World Think Tank", "Combat Chuck's Call"]
},
{  
    name:"Our Newest Album Ever",
    description:"1997",
    imgURL: url="https://en.wikipedia.org/wiki/Our_Newest_Album_Ever!#/media/File:FiveIronFrenzy-OurNewestAlbumEver!.jpg",

songTitles:["Handbook for the Sellout","Where's Micah?", "Superpowers", "Fistful of Sand", "Suckerpunch", "Kitty Doggy", "Blue Comb '78", "Banner Year", "Second Season", "Litmus", "Oh, Canada", "Most Likely to Succeed", "Every New Day", "The Godzilla Song (hidden track"]
},
{  
    name:"All the Hype That Money Can Buy",
    publishDate:"2000",
    imgURL: url="https://en.wikipedia.org/wiki/All_the_Hype_That_Money_Can_Buy#/media/File:AlltheHypeThatMoneyCanBuy.jpg",

songTitles:["The Greatest Story Ever Told", "Me Oh My", "Solidarity", "The Phantom Mullet", "Ugly Day", "Fahrenheit", "Four-Fifty-One", "You Probably Should Move Here", "Hurricanes", "Giants", "I Still Like Larry", "All the Hype", "It's Not Unusual", "A New Hope", "World Without End"]
},
{  
    name:"Five Iron Frenzy 2: Electric Boogaloo",
    publishDate:"2001",
    imgURL: url="https://en.wikipedia.org/wiki/Five_Iron_Frenzy_2:_Electric_Boogaloo#/media/File:FiveIronElectricBoogaloo.jpg",

songTitles:["Pre-Ex-Girlfriend","Far, Far Away", "You Can't Handle This", "Farsighted", "Spartan", "The Day We Killed", "Juggernaut", "Plan B", "Blue Mix", "Vultures", "Car", "Eulogy"]
},
{  
    name:"The End is Near",
    publishDate:"2003",
    imgURL: url="https://en.wikipedia.org/wiki/The_End_Is_Near_(Five_Iron_Frenzy_album)#/media/File:Theendishere.jpg",

songTitles:["Cannonball","At Least I'm Not Like All Those Other Old Guys", "So Far, So Bad", "New Year's Eve", "American Kryptonite", "It Was Beautiful", "Wizard Needs Food, Badly", "Farewell to Arms", "See The Flames Begin To Crawl", "Anchors Away", "Something Like Laughter", "That's How The Story Ends", "On Distant Shores", "Cross of St. Andrew"]
},
{  
    name:"Engine of a Million Plots",
    publishDate:"2013",
    imgURL: url="https://en.wikipedia.org/wiki/Engine_of_a_Million_Plots#/media/File:EngineofaMillionPlots.jpg",

songTitles:["Against a Sea of Troubles","So Far", "Zen & the Art of Xenophobia", "We Own the Skies", "Someone Else's Problem", "I Am Jack's Smirking Revenge", "To Start A Fire", "Battle Dancing Unicorns with Glitter", "Into Your Veins", "It Was a Dark & Stormy Night", "I've Seen the Sun", "Blizzards & Bygones"]
},
{  
    name:"Until This Shakes Apart",
    publishDate:"2021",
    imgURL: url="https://en.wikipedia.org/wiki/Upbeats_and_Beatdowns#/media/File:UpbeatsAndBeatDowns.jpg",

songTitles:["In Through the Out Door","Lonesome for Her Heroes", "So We Sing", "Bullfight for an Empty Ring", "Renegades", "Tyrannis", "Auld Lanxiety", "Homelessly Devoted to You", "One Heart Hypnosis", "While Supplies Last", "Wildcat", "Like Something I Missed", "Huerfano"]
}
]

app.get('/', (request, response)=>{
    response.send(`<h1>Five Iron Frenzy</h1><br>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/FiveIronFrenzy2019.jpg" width="400px" alt="Five Iron Frenzy in July 2019"></img><br>

    <img src="https://cdn.hmmagazine.com/wp-content/uploads/2013/11/fif-web.jpg" width="400px" alt="Five Iron Frenzy"</img><br>

    <p>Five Iron Frenzy is an American band formed in Denver, Colorado, in 1995. Best known for playing ska punk music characterized by an offbeat sense of humor and prominent Christian themes, Five Iron was one of the pioneering figures of the Christian ska movement which emerged with ska's mainstream revival in the 1990s. Since 2000, the band's music has shifted away from ska to embrace stronger alternative rock and pop punk influences, though it continues to feature Christian overtones despite several members' changes in religious beliefs</p>`)
})

app.get('/albums/:id', (request,response) => {
    
    let id = request.params.id;
    
        response.send(`
            ${nav}
        
            <h1>${albums.albums[id].name}</h1>
            <img src="${albums.albums[id].img}"  height="300px">
        
        `)
    
    })

let nav = `<ul>
<li><a class="font" href="/albums/0">Upbeats and Beatdowns</a></li>
<li><a class="font" href="/albums/1">Our Newest Album Ever</a></li>
<li><a class="font" href="/albums/2">All the Hype that Money Can Buy</a></li>
<li><a class="font" href="/albums/3">Five Iron Frenzy 2: Electric Boogaloo</a></li>
<li><a class="font" href="/albums/4">The End is Near</a></li>
<li><a class="font" href="/albums/5">Engine of a Million Plots</a></li>
<li><a class="font" href="/albums/6">Until This All Shakes Apart</a></li>
</ul>
`

app.get('*', (request, response) =>{

    response.send(`Oops. You've reached an error.`)
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})