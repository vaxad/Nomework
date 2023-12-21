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
        "planName": "Master of Mischief",
        "tagline": "Craft masterful homework that even the teacher will applaud.",
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
            <div className={` border-2 ${index%3==1?" scale-110 border-purple-500 ":"scale-100 border-slate-500"} w-full rounded-xl border-2 border-transparent flex flex-col justify-start items-center shadow-md shadow-slate-900 p-10 hover:border-purple-800`} style={{backgroundColor:"var(--featureCard-bg)"}}>
                <h1 className=' text-4xl text-center py-2 underline break-words w-full flex-wrap decoration-purple-600'>{pricing.planName}</h1>
                <p className=' italic text-xs text-center'>{pricing.tagline}</p>
                <h1 className=' text-4xl py-5'><span className=' text-lg'>$</span>{pricing.price}<span className=' text-lg'>/mo</span></h1>
                <hr className=' w-full mb-4'/>
                <div className=' flex flex-col justify-start w-full gap-8 items-start'>
                  {pricing.benefits.map((benefit, index)=>(
                    <div key={index} className=' flex flex-row gap-5 items-center'>
                      <div className=' bg-[var(--featureCard-bg)] bg-opacity-25 border-2 border-slate-100 p-2 rounded-full w-fit h-fit'>
                      <svg class="text-purple-400 w-5 h-5" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                      </div>
                      <p className=' text-lg'>{benefit}</p>
                    </div>
                  ))}
                    </div>
                    <div className=' flex h-full justify-end w-full items-end'>
          <button className=' bg-purple-500 w-full rounded-xl py-2 px-4 mt-5 hover:scale-90 transition-all'>Subscribe</button>
        </div>
            </div>
        )
      }
  return (
    <div className=' min-h-screen px-5 lg:px-24 py-12 flex flex-col justify-center items-center w-full gap-10'>
        <h1 className=' text-4xl pb-10 text-center'>Pricing Plans😋</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
            {pricings.map((pricing, index)=>(
                <PricingCard key={index} index={index} pricing={pricing}/>
            ))}
        </div>
        
    </div>
  )
}
