import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../../../Config';
function Footer() {
  const [ getall,setGetAll] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/v2/GetsiteSettings`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGetAll(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About Us',
          link: '/about-us'
        },
        {
          name: 'Contact-Us',
          link: '/contact-us'
        },
        {
          name: 'Movies',
          link: '/movies'
        }

      ]
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          link: '#'
        },
        {
          name: 'Romantic',
          link: '#'
        },
        {
          name: 'Drama',
          link: '#'
        },
        {
          name: 'Historical',
          link: '#'
        },


      ]
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'My Favorite',
          link: '/favorite'
        },
        {
          name: 'Profile',
          link: '/profile'
        },
        {
          name: 'Change Password',
          link: '/password'
        },
      ]
    }
  ]
  return (
    // <div className="bg-dry py-4 border=t-2 border-black">
    //   <div className="container mx-auto px-2">
    //     <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
    //       {Links.map((link, index) => (
    //         <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
    //           <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
    //           <ul className='text-sm flex flex-col space-y-3'>

    //             {
    //               link.links.map((text, index) => (
    //                 <li key={index} className='flex items-baseline'>
    //                   <Link to={text.link} className='text-border inline-block w-full hover:text-subMain '>
    //                     {text.name}
    //                   </Link>
    //                 </li>
    //               ))
    //             }
    //           </ul>
    //         </div>
    //       ))}
    //       <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 1g:col-span-3">
    //         <Link to="/">
    //           <img
    //             src=" /images/logo.png"
    //             alt="logo"
    //             className="w-2/4 object-contain h-12" />
    //         </Link>
    //         <p className="leading-7 text-sm text-border mt-3">
    //           <span>
    //             196 Andrew Road, Suite, <br /> New York, NY 10007
    //           </span>
    //           <br />
    //           <span>Tell: +91 9095313557</span>
    //           <br />
    //           <span>Email: xyz@gmail.com</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-dry py-3 border=t-2 border-black">
    {/* <div className="container mx-auto px-2"> */}
      <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
        {Links.map((link, index) => (
          <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
            <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
            <ul className='text-sm flex flex-col space-y-3'>

              {
                link.links.map((text, index) => (
                  <li key={index} className='flex items-baseline'>
                    <Link to={text.link} className='text-border inline-block w-full hover:text-subMain '>
                      {text.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        ))}
        <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 1g:col-span-3">
        {getall.length > 0 && getall[0].logo ? (
          <Link to="/">
            <img
              src={`data:image/png;base64,${getall[0].logo}`}
              alt="logo"
              className="w-2/4 object-contain h-12" />
          </Link>
           ) : (
            <div></div>
          )}
          <p className="leading-7 text-sm text-border mt-3">
            <span>
              196 Andrew Road, Suite, <br /> New York, NY 10007
            </span>
            <br />
            <span>Tell: +91 9095313557</span>
            <br />
            <span>Email: xyz@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  // </div>
  );
}
export default Footer;
