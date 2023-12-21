import React from 'react'

export default function Page() {
    const features = [
        {
          "title": "Text Generation",
          "description": "Utilize Gemini AI to generate text based on user prompts.",
          "icon": "🚀"
        },
        {
          "title": "Customization",
          "description": "Customize fonts, shadows, spacing, and margins for the generated text.",
          "icon": "🎨"
        },
        {
          "title": "Handwriting Imitation (Coming Soon)",
          "description": "Scan and incorporate your own handwriting into the generated canvas.",
          "icon": "✍️"
        },
        {
          "title": "Download Options",
          "description": "Download individual images or generate a single PDF of the entire canvas.",
          "icon": "📥"
        },
        {
          "title": "User-friendly Interface",
          "description": "Intuitive design for a seamless user experience.",
          "icon": "🖥️"
        },
        {
          "title": "Handwriting Improvement Tips (Coming Soon)",
          "description": "Get tips to enhance your handwriting skills.",
          "icon": "📝"
        }
      ]
      
      const FeatureCard = ({feature}) => {
        return(
            <div className=' w-full rounded-xl flex md:flex-row flex-col justify-start gap-10 shadow-sm hover:scale-105 transition-all shadow-slate-900 items-center p-10' style={{backgroundColor:"var(--featureCard-bg)"}}>
                <h1 className=' text-4xl p-5 bg-purple-500 rounded-full'>{feature.icon}</h1>
                <div className=' flex flex-col justify-start w-full items-start'>
                    <h1 className=' text-2xl w-full text-center md:text-left'>{feature.title}</h1>
                    <p className=' text-lg w-full text-center md:text-left'>{feature.description}</p>
                    </div>
            </div>
        )
      }
  return (
    <div className=' min-h-screen px-5 md:px-12 lg:px-24 py-12 flex flex-col justify-center items-center w-full gap-10'>
        <h1 className=' text-4xl text-center'>Features That We Offer😎</h1>
        <div className=' flex flex-col gap-10 w-full'>
            {features.map((feature, index)=>(
                <FeatureCard key={index} feature={feature}/>
            ))}
        </div>
    </div>
  )
}
