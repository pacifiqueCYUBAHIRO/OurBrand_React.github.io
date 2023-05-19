import icc1 from './images/icc1.png';
import advise from './images/advise.png';
import acc from './images/acc.png';
import icc3 from './images/icc3.png';
import accounting from './images/accounting.png';
import React from 'react';
import './HomeStyles.css';
function Home() {
    const link0 = 'Hire.js';
  return (
    <div>
    
   <div className='main'>
   <div className="container">
    <div className="half">
        <h1>Get your Website now </h1>
        <div className="sub-half">
            
            <img src={icc1} alt="" />
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        </div>
       <br/>
        <div className="sub-half"> 
        <img src={icc1} alt="" />
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
           

            </p>
        </div>
        
        <br/>
        
            <div className="sub-half"> 
            <img src={icc1} alt="" />
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        </div>
    </div>

    <div className="line"></div>
    
    <div className="half">
        <div className='sub-half2'>
        <h2>Creation</h2>
        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        
        <h2>Innovation</h2>
        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
            leg build some thing that is going to benefit all, form the user and the administrator sides 
            from this frame work we will learn how to manage the things you have just posted and create a desired work from both parties
        </p>
        <a href={link0}><img src={icc3} width={'300px'} alt="" /></a>
    </div>
</div>
</div></div>

<div className="whatwedo" id="article"><label>What also we do</label>
    <div className="columns">
        <div className="column">
            <span>Web/Graphic Design</span>
            <p>for this experiance we will need your trust to our service will provide to you to get more concern to your need

                leg build some thing that is going to benefit all, form the user and the administrator sides 
            from this frame work we will learn how to manage the things you have just posted and create a desired work from both parties
                for this experiance we will need your trust to our service will provide to you to get more concern to your need
                thous throughout this web application we will require your full adress name and more details that are regarding to your specific action will be took place.
                </p>
        </div>
        <div className="column">
            <span>Web/Graphic Design</span>
            <p>for this experiance we will need your trust to our service will provide to you to get more concern to your need

                leg build some thing that is going to benefit all, form the user and the administrator sides 
            from this frame work we will learn how to manage the things you have just posted and create a desired work from both parties
                for this experiance we will need your trust to our service will provide to you to get more concern to your need
                thous throughout this web application we will require your full adress name and more details that are regarding to your specific action will be took place.
                </p>
        </div>
        <div className="column">
            <span>Web/Graphic Design</span>
            <p>for this experiance we will need your trust to our service will provide to you to get more concern to your need

                leg build some thing that is going to benefit all, form the user and the administrator sides 
            from this frame work we will learn how to manage the things you have just posted and create a desired work from both parties
                for this experiance we will need your trust to our service will provide to you to get more concern to your need
                thous throughout this web application we will require your full adress name and more details that are regarding to your specific action will be took place.
                </p>
        </div>

</div>
</div>



<div className="dealwith"><label> We deal with</label>
        <div className="boxes">
            <div className="box">
            <img src={accounting} alt="" />
            <span>Accounting</span>
        </div>
            <div className="box">
           <br/>  <br/><img src={advise} width={'250px'} alt="" /> <br/><br/>  
            <span>Advise</span>
        </div>
            <div className="box">
            <br/><br/><img src={acc} width={'250px'} alt="" /><br/><br/>
            <span>Debugging</span>
        </div>

    </div>
</div>



    </div> 
  )
}

export default Home;
