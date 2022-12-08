import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <style jsx>
        {`
            .bg{
                width:100;height:100px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                background-image: url('/a.jpg');
                height: 600px;
            }
            .description{
                    font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    font-size: 21px;
                    padding:20px;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    text-align: left;
            }
            .snapshot{
                // width:400px;height:300px;
                margin:5px;
                text-align:center;

            }
            .qutoes{
                color:gray;
                font-size: 18px;
                text-align: center;
                padding:20px;
            }
        `}
    </style>
    <div className="bg">dsffdsdfs</div>
    <div className={styles.container}>

    
        <h1 className={styles.title}>
        Man must explore, and this is exploration at its greatest
        </h1>
        <p className="description">
   Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.
What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.
   </p>

   <p className="description">A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.

For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us. </p>


 <q className="qutoes">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</q> 

<p className="description">There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.

There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.

The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.
Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.
</p>
<h2>Reaching for the Stars
</h2>
        <p className="description">As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.
        Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.

As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.
</p>
<div className="snapshot">
    
<Image src="/a.jpg" alt="Vercel Logo" width={800} height={300} /><br/>

To go places and do things that have never been done before – that’s what living is all about.
</div>


    </div>
    </> )
}
