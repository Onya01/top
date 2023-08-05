import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './travel.css';
import img0 from '../Assets/image-0.jpeg';
import img1 from '../Assets/image-1.jpeg';
import img2 from '../Assets/image-2.jpeg';
import img3 from '../Assets/image-3.jpeg';
import img4 from '../Assets/image-4.jpeg';

const Travel = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const images = [
    {
      id: 0,
      img: img0,
      alt: 'Image 0',
    },
    {
      id: 1,
      img: img1,
      alt: 'Image 1',
    },
    {
      id: 2,
      img: img2,
      alt: 'Image 2',
    },
    {
      id: 3,
      img: img3,
      alt: 'Image 3',
    },
    {
        id: 3,
        img: img4,
        alt: 'Image 4',
      },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const autoSlideInterval = 3000;

  useEffect(() => {
    const autoSlideImages = () => {
      nextImage();
    } ;

    const intervalId = setInterval(autoSlideImages, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="container background-image">
      <div className="tab-nav">
        <div
          className={classnames('tab-link', { active: activeTab === '1' })}
          onClick={() => {
            toggle('1');
          }}
        >
          Menu
        </div>
        <div
          className={classnames('tab-link', { active: activeTab === '2' })}
          onClick={() => {
            toggle('2');
          }}
        >
          About Us
        </div>
        <div
          className={classnames('tab-link', { active: activeTab === '3' })}
          onClick={() => {
            toggle('3');
          }}
        >
          Contact Us
        </div>
      </div>
      <div className="tab-content">
        {activeTab === '1' && (
          <div>
            <h4>Menu</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas suscipit aspernatur delectus dolorem cumque rerum amet, officiis harum ratione quo pariatur, recusandae sequi eligendi aperiam. Saepe laboriosam totam ea!
              Pariatur voluptatibus accusantium veniam officiis ab culpa molestiae sunt consectetur odit, placeat tempora. Minus deleniti nostrum illum fuga iusto, pariatur ipsa praesentium consectetur distinctio beatae maxime quasi voluptatibus? Consectetur, fugiat!
              Sed quos doloribus praesentium commodi ullam autem quod nemo minima deserunt, corrupti et dolorem perspiciatis tenetur mollitia, temporibus nisi quam quas iusto aspernatur a voluptas. Quisquam cupiditate unde soluta iusto.
              Molestiae minus fugit facere harum odit corporis magni in, aliquid, eligendi ab expedita, unde quia nisi accusantium repudiandae corrupti dolor amet veritatis? Quis animi officiis quibusdam consequuntur recusandae asperiores quos!
              Perspiciatis explicabo eligendi molestias suscipit! Deleniti impedit ducimus assumenda beatae omnis illo consequuntur quia quos porro maiores quaerat inventore corporis fuga dolores cumque natus soluta libero illum, expedita quasi magni!
            </p>
          </div>
        )}
        {activeTab === '2' && (
          <div>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi animi accusantium autem reprehenderit blanditiis ut vero minus, magni dolorum atque amet et culpa aperiam qui debitis! Assumenda, aliquam vero?
              Rem, delectus laudantium. Tenetur asperiores voluptatem, saepe nihil quis hic aliquam sit. Iure nihil iusto, ipsam adipisci modi iste omnis? Ducimus, illo. Cupiditate nisi nesciunt, dolores odio voluptates minima esse?
              Culpa eaque recusandae eum aperiam facilis numquam modi aliquid optio officiis ea veritatis, dicta, facere error enim ex rerum repudiandae veniam, quisquam repellat. Accusantium ducimus fugit sequi eveniet eaque a!
              Odio, provident? Laudantium distinctio beatae modi provident ea eos corrupti facere minima consequuntur molestias explicabo, mollitia, neque aut ipsam magni officiis rem libero natus architecto harum eaque a dolorem? Quibusdam.
              Recusandae perferendis odio numquam sapiente ex atque aperiam, error quae, minima temporibus architecto ullam! Eos harum ex nam et, blanditiis ipsum.
            </p>
          </div>
        )}
        {activeTab === '3' && (
          <div>
            <h4>Contact Us</h4>
            <p>
              Proin vitae nulla vel quam aliquam luctus. Suspendisse potenti. Mauris in orci vel sapien fringilla posuere. Nullam auctor nulla eget diam vulputate, a condimentum lacus bibendum. Donec nec neque nec nisl bibendum bibendum a et nisi. Donec interdum mi ut elit dignissim, eget tincidunt nibh feugiat. Donec pharetra diam quis ligula porttitor maximus.
            </p>
          </div>
        )}
      </div>
      <div className="slider-container">
        <button className="slider-button prev-button" onClick={prevImage}>{'<'}</button>
        <img className="slider-image" src={images[currentImageIndex].img} alt={images[currentImageIndex].alt}/>
        <button className="slider-button next-button" onClick={nextImage}>{'>'}</button>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" />

          <label htmlFor="departure-date">Departure Date:</label>
          <input type="date" id="departure-date" name="departure-date" />

          <label htmlFor="return-date">Return Date:</label>
          <input type="date" id="return-date" name="return-date" />

          <label htmlFor="travelers">Number Onboard:</label>
          <select id="passengers" name="people">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Travel;