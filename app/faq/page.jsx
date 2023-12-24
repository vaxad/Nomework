"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react'

export default function page() {
    const FaqCard = ({faq, index}) => {
      const [open, setopen] = useState(false)
      return(
        <motion.div  initial={{opacity:0, y:50, x:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:0.8+(index*3/10), ease:"linear", type:"spring"}}   className=' w-full flex flex-col'>
          <hr className=' w-full'/>
          <div className={` h-fit flex flex-col ${open?"":"bg-transparent"}`}>
          <div className={` w-full flex flex-row justify-between items-center gap-10 ${open?"pt-5 pb-2":"py-5"} px-5`}>
          <h1 className=' text-lg md:text-xl lg:text-2xl w-11/12'><span className=' text-xl md:text-3xl lg:text-4xl text-purple-500'>Q: </span>{faq.question}</h1>
          <svg onClick={()=>{setopen(!open)}} xmlns="http://www.w3.org/2000/svg" x="0px" className={` text-purple-500 hover:scale-110 w-[25px] h-[25px] transition-all ${open?"rotate-45":"rotate-0"}`} fill='currentColor' y="0px" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
</svg>
          </div>
          <p className={` ${open?"block":"hidden"} ml-6 md:ml-20 pb-5`}>{faq.answer}</p>
          </div>
        </motion.div>
      )
    }
    const faqs=[
        {
          "question": "How does this magic homework machine work?",
          "answer": "We've trained a bunch of witty hamsters to scribble creative responses to your prompts. Just kidding! It's Gemini AI doing the heavy lifting, making your homework a breeze!"
        },
        {
          "question": "Can I blame the AI if my teacher questions my homework?",
          "answer": "Absolutely! Just tell your teacher that a highly trained AI generated it. They might be so impressed they'll give you extra credit. (Note: Results may vary)"
        },
        {
          "question": "What's the secret ingredient for a perfect excuse?",
          "answer": "It's a closely guarded secret, but rumor has it that a dash of procrastination and a sprinkle of creativity do wonders. Our Procrastinator's Paradise plan spills the beans!"
        },
        {
          "question": "Will the Handwriting Imitation feature turn me into a handwriting prodigy?",
          "answer": "Coming soon! While we can't guarantee prodigy status, our imitation feature will make your homework look like a masterpiece, even if your handwriting still needs practice."
        },
        {
          "question": "Can I use this for serious academic work?",
          "answer": "Of course! Our website is as serious as a clown at a funeral. Feel free to use it for serious work, as long as you're prepared for a sprinkle of humor in the mix."
        }
      ]
      
  return (
    <div>
       <div className=' min-h-screen px-5 md:px-12 lg:px-24 py-6 flex flex-col justify-start items-center w-full'>
        <motion.h1  initial={{opacity:0, y:0, x:0}} whileInView={{opacity:1, x:0, y:0}} viewport={{once:true}} transition={{duration:1, ease:"linear", type:"spring"}}   className=' text-4xl text-center py-10'>Frequently Asked Questions🥸</motion.h1>
        <div className=' flex flex-col w-full'>
            {faqs.map((faq, index)=>(
                <FaqCard key={index} faq={faq} index={index}/>
            ))}
        </div>
        <motion.hr  initial={{opacity:0, y:0, x:0, scaleX:0}} whileInView={{opacity:1, x:0, y:0, scaleX:1}} viewport={{once:true}} transition={{duration:1+((faqs.length*3)/10), ease:"linear", type:"spring"}}   className=' w-full'/>
    </div>
    </div>
  )
}
