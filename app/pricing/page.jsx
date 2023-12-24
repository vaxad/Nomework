"use client"
import { motion } from 'framer-motion'
import React from 'react'

export default function Page() {
    const pricings = [
      {
        "planName": "Starter Scribbler",
        "tagline": "Dip your toes into the world of homework hilarity.",
        "price": "9.99",
        "benefits": [
          "Unlimited access to AI-generated excuses",
          "Customizable font colors (because black is so last century)",
          "Daily homework haiku delivered to your inbox"
        ]
      },
      {
        "planName": "Procrastinator's Paradise",
        "tagline": "For those who believe deadlines are mere suggestions.",
        "price": "19.99",
        "benefits": [
          "Emergency 'Last Minute Panic' button",
          "Priority access to creative excuses",
          "Exclusive 'Excuse of the Month' club membership"
        ]
      },
      {
        "planName": "Mr. Mischief",
        "tagline": "Homework that even the teacher will applaud.",
        "price": "29.99",
        "benefits": [
          "AI-generated handwritten notes (almost as good as the real thing)",
          "Virtual coffee stains for that authentic 'up all night' look",
          "Personalized 'Teacher's Pet' achievement badge"
        ]
      }
    ]
    
      
      const PricingCard = ({pricing,index}) => {
        return(
            <motion.div initial={{opacity:0, x:index===0?-50:index===2?50:0, y:index===1?50:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:0.8, ease:"linear", type:"spring"}} className={` border-2 ${index%3==1?" scale-100 md:scale-110 border-purple-500 ":"scale-100 border-slate-500"} w-full rounded-xl border-2 border-transparent flex flex-col justify-start items-center shadow-md shadow-slate-900 p-5 md:p-10 hover:border-purple-800`} style={{backgroundColor:"var(--featureCard-bg)"}}>
                <motion.h1 initial={{opacity:0, y:50, x:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:1, ease:"linear", type:"spring"}} className=' text-4xl text-center py-2 underline break-words w-full flex-wrap decoration-purple-600'>{pricing.planName}</motion.h1>
                <motion.p initial={{opacity:0, y:20, x:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:1, ease:"linear", type:"spring"}}  className=' italic text-xs text-center'>{pricing.tagline}</motion.p>
                <motion.h1 initial={{opacity:0, y:0, x:0, scale:0}} whileInView={{opacity:1, x:0, y:0, scale:1}} viewport={{once:true}} transition={{duration:1, ease:"linear", type:"spring"}}  className=' text-4xl py-5'><span className=' text-lg'>$</span>{pricing.price}<span className=' text-lg'>/mo</span></motion.h1>
                <motion.hr initial={{opacity:0, y:0, x:0, scaleX:0}} whileInView={{opacity:1, x:0, y:0, scaleX:1}} viewport={{once:true}} transition={{duration:1.2, ease:"linear", type:"spring"}}  className=' w-full mb-4'/>
                <div className=' flex flex-col justify-start w-full gap-8 items-start'>
                  {pricing.benefits.map((benefit, index)=>(
                    <div key={index} className=' flex flex-row gap-5 items-center'>
                      <motion.div initial={{opacity:0, y:0, x:-50}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:1.2+((index*3)/10), ease:"linear", type:"spring"}}  className=' bg-[var(--featureCard-bg)] bg-opacity-25 border-2 border-slate-100 p-2 rounded-full w-fit h-fit'>
                      <svg class="text-purple-400 w-5 h-5" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                      </motion.div>
                      <motion.p  initial={{opacity:0, y:0, x:50}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:1.2+((index*3)/10), ease:"linear", type:"spring"}}   className=' text-lg'>{benefit}</motion.p>
                    </div>
                  ))}
                    </div>
                    <div className=' flex h-full justify-end w-full items-end'>
          <motion.button  initial={{opacity:0, y:0, x:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:2, ease:"linear", type:"spring"}}   className=' bg-purple-500 w-full rounded-xl py-2 px-4 mt-5 hover:scale-90 transition-all'>Subscribe</motion.button>
        </div>
            </motion.div>
        )
      }
  return (
    <div className=' min-h-screen px-0 md:px-24 py-12 flex flex-col justify-center items-center w-full gap-10'>
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, ease:"easeIn"}}  className=' text-4xl  text-center'>Pricing Plans😋</motion.h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
            {pricings.map((pricing, index)=>(
                <PricingCard key={index} index={index} pricing={pricing}/>
            ))}
        </div>
        
    </div>
  )
}
