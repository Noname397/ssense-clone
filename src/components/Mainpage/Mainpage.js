import './Mainpage.css'
import promotion from '../../assets/promotion.gif'
import Newscard from './Newscard/Newscard'
import src1 from '../../assets/cardnews1.jpg'
import src2 from '../../assets/cardnews2.jpg'
import src3 from '../../assets/cardnews3.jpg'
import src4 from '../../assets/cardnews4.jpg'
import src5 from '../../assets/cardnews5.jpg'
import Recentcard from './Recentcard/Recentcard'
import { Link } from 'react-router-dom'

const Mainpage = () => {
    const newCardItems = [
        {
            img: src1,
            category: 'Market',
            title: 'Buckle Up, Baby',
            subheadline: 'Riding high in the best boots of the summer with Abra, Lanvin, and 1017 ALYX 9SM.',
            date:  new Date('2023-05-31')
        },
        {
            img: src2,
            category: 'Music',
            title: 'Sage Elsesser’s Shades of Blue',
            subheadline: 'Spending an afternoon with the multi-faceted rapper as he reflects on his latest album, telling the truth, and finding gratitude.',
            date:  new Date('2023-05-31')
        }
    ]

    const recentCardItems = [
        {
            img: src3,
            category: 'Market',
            title: 'Lux light jacket',
            subheadline: 'Keep it light and tasteful this spring, with tailored favorites from Lemaire, Lanvin, and Giorgio Armani.',
            date: new Date('2023-05-31')
        },
        {
            img: src4,
            category: 'Fashion',
            title: 'Street Style Is Changing - Can Fashion Keep Up?',
            subheadline:'Simbarashe Cha documents fashion week and style on the street for “The New York Times.” He’s got some thoughts.',
            date: new Date('2023-05-30')
        },
        {
            img: src5,
            category: 'Fashion',
            title: 'The Shifting Look of Pop Stars',
            subheadline: 'As Lily-Rose Depp steps into the role on The Idol, we look at the history of the pop icon and what it reveals about our cultural desires.',
            date: new Date('2023-05-26')
        }
    ]
    return (
    <div className="mt-[55px] px-4 sm:px-9">
        <img src={promotion} className='w-full px-9' alt="" />

        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mb-5'>
            <Newscard
                img={newCardItems[0].img}
                category = {newCardItems[0].category}
                title = {newCardItems[0].title}
                subheadline = {newCardItems[0].subheadline}
                date = {newCardItems[0].date}
            >

            </Newscard>

            <Newscard 
                img={newCardItems[1].img}
                category = {newCardItems[1].category}
                title = {newCardItems[1].title}
                subheadline = {newCardItems[1].subheadline}
                date = {newCardItems[1].date}
            >

            </Newscard>
        </div>

        <div className='grid md:grid-cols-3 gap-6 grid-cols-1 mb-5'>
            <Recentcard
                img={recentCardItems[0].img}
                category={recentCardItems[0].category}
                title={recentCardItems[0].title}
                date={recentCardItems[0].date}
            ></Recentcard>
            <Recentcard
                img={recentCardItems[1].img}
                category={recentCardItems[1].category}
                title={recentCardItems[1].title}
                date={recentCardItems[1].date}
            ></Recentcard>
            <Recentcard
                img={recentCardItems[2].img}
                category={recentCardItems[2].category}
                title={recentCardItems[2].title}
                date={recentCardItems[2].date}
            ></Recentcard>

            <Newscard>
                img={newCardItems[1].img}
                category = {newCardItems[1].category}
                title = {newCardItems[1].title}
                subheadline = {newCardItems[1].subheadline}
                date = {newCardItems[1].date}
            </Newscard>
            
        </div>

    </div>
    )
}

export default Mainpage;