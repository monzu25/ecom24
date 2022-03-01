import React from 'react';
import './Blog.css';


const blogs = [
    {
        titel: "Top 10 Sunglass For Men",
        imgUrl: `https://ae01.alicdn.com/kf/H647b4a0e3e2340b5a022423856ef19c5r/2021-Popular-Fashion-Small-heavy-Rectangle-Women-Luxury-Sunglasses-Brand-Designer-Vintage-Punk-Men-Sun-Glasses.jpg_Q90.jpg_.webp`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        titel: "Top 10 Sunglass For Women",
        imgUrl: `https://ae01.alicdn.com/kf/Hc6fde08025774748b7b004fbb3d5a5caZ/New-Rimless-Rectangle-Sunglasses-for-Women-Trendy-Frameless-Square-Shades-for-Men-Ultralight-UV400-Eyewear-Unisex.jpg_Q90.jpg_.webp`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        titel:"Top 10 Sunglass For Kids",
        imgUrl: `https://ae01.alicdn.com/kf/Hacfa9a6d1de241e5ba09e7e1bee5cce9X/Anti-Blue-Light-Blocking-Computer-Glasses-For-Children-Kids-TR90-Frame-Fashion-Girls-Boys-Square-Lenses.jpg_Q90.jpg_.webp`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
  
]


const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog_section_header'>Blogs</h1>
            <div className='blog_section'>
                {
                    blogs.map(blog => (
                <div className='blog_card'>
                    <div className='blog_img'>
                        <img src={blog.imgUrl} alt="Blog image" />
                    </div>
                    <div className='blog_header'>
                    
                    <h2>{ blog.titel}</h2>
                    </div>
                     <div className='blog_details'>
                                <p>{blog.description.slice(0, 50)}</p>
                         <a href="">Read More</a>       
                    </div>
                </div> 
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;