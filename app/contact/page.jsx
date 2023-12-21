"use client"
import { useRef } from 'react';

const ArcCard = ({ name, title, url, college, img }) => {
    const boundingRef = useRef(null);

    return (
        <div className='[perspective:800px] w-full col-span-1 flex justify-center items-center'>
            <div onMouseLeave={() => (boundingRef.current = null)}
                onMouseEnter={(ev) => {
                    boundingRef.current = ev.currentTarget.getBoundingClientRect();
                }}
                onMouseMove={(ev) => {
                    if (!boundingRef.current) return;
                    const x = ev.clientX - boundingRef.current.left;
                    const y = ev.clientY - boundingRef.current.top;
                    const xPercentage = x / boundingRef.current.width;
                    const yPercentage = y / boundingRef.current.height;
                    const xRotation = (xPercentage - 0.5) * 20;
                    const yRotation = (0.5 - yPercentage) * 20;

                    ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                    ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                    ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                    ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
                }}
                className="group relative flex flex-col gap-2 flex-grow w-full  rounded-md p-4 bg-[var(--primary-button-bg)] text-purple-600 transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.06)]"
            >
                {/* <figure className="rounded-md mix-blend-multiply [background-image:radial-gradient(at_70%_40%,transparent_30%,currentColor_80%),url(/noise.svg)]" /> */}
                <div className=' w-full h-full'><img className='[perspective:1000px] hover:shadow-xl shadow-slate-700 transition-all  w-full rounded-md  object-fill aspect-square' src={img}></img></div>
                <div className="pt-4">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-lg">{title}</p>
                </div>
                <footer className="flex items-end">
                    <p className="flex rounded-sm border border-current px-1 py-px text-[9px] uppercase">
                        <a href={url} target='_blank'>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/60/9333ea/new-post.png" alt=""/>
                    </a>
                        <p className="-my-px mx-1 inline-block w-4 border-l border-r border-current bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_2px)]" />
                        
                    </p>
                    <div className="ml-auto w-16 text-sm text-right">
                        {/* <BrowserCompanyLogo /> */}
                        {college}
                    </div>
                </footer>
                <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
            </div>
        </div>
    );
};

export default function Page() {
  const members = [
    {
      name: "Varad Prabhu",
      title: "Team Leader / Web & Backend Lead",
      url: "https://www.linkedin.com/in/varadprabhu/",
      college: "DJSCE COMPS",
      img: "/varad.jpg"
    },
    {
      name: "Tirath Bhathawala",
      title: "ML Lead",
      url: "https://www.linkedin.com/in/tirath-bhathawala-a58769159/",
      college: "DJSCE COMPS",
      img: "/tirath.jpeg"
    },
    {
      name: "Siddhant Uniyal",
      title: "ML Subordinate & Subordinate Orator",
      url: "https://www.linkedin.com/in/siddhant-uniyal-019767228/",
      college: "DJSCE COMPS",
      img: "/siddhant.jpg"
    },
    {
      name: "Shubham Jaiswar",
      title: "ML Subordinate",
      url: "https://www.linkedin.com/in/shubhamjaiswar/",
      college: "DJSCE COMPS",
      img: "/shubham.jpeg"
    }
  ]
  return (
    <div className='w-full outline-white-900 overflow-y-hidden  min-h-screen '>
      <h1 className=' text-4xl text-center py-10'>Developed By DjDawgs🚀</h1>
      <div className=" w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pb-12  px-12 flex-wrap gap-8 min-h-[60vh] items-start justify-center">
        {members.map((member, index) => (
          <ArcCard key={index} name={member.name} title={member.title} url={member.url} college={member.college} img={member.img} />
        ))}
      </div>
    </div>
  )
}





